"use client";

import { useState, useEffect } from "react";
import { EventDetails, RegistrationFormData, UseRazorpayOptions } from "@/types/payment";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export function useRazorpay(options?: UseRazorpayOptions) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Load the Razorpay SDK
  useEffect(() => {
    const loadRazorpayScript = () => {
      return new Promise<void>((resolve) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        script.onload = () => resolve();
        document.body.appendChild(script);
      });
    };

    loadRazorpayScript();
  }, []);

  const createPayment = async (
    formData: RegistrationFormData,
    eventDetails: EventDetails
  ) => {
    try {
      setIsLoading(true);
      setError(null);

      // Validate Razorpay key
      const razorpayKeyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
      if (!razorpayKeyId) {
        throw new Error("Payment configuration error");
      }

      // Calculate team size
      const teamSize = 1 + (formData.teamMembers?.length || 0);
      
      // Calculate amount based on pricing model
      const amount = eventDetails.isFixedPrice 
        ? eventDetails.fixedPrice || 0
        : eventDetails.pricePerPerson * teamSize;

      // Create an order on the server
      const response = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formData,
          eventDetails,
          teamSize,
          amount,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create payment order");
      }

      const { order } = await response.json();

      // Open Razorpay checkout
      const razorpay = new window.Razorpay({
        key: razorpayKeyId,
        amount: order.amount, // Amount in paisa
        currency: order.currency,
        name: "IEEE GU Young Minds",
        description: `Registration for ${eventDetails.name}`,
        order_id: order.id,
        handler: async (response: any) => {
          try {
            // Verify the payment on the server
            const verificationResponse = await fetch("/api/payment/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                registration: formData,
                eventDetails,
              }),
            });

            const data = await verificationResponse.json();

            if (data.success) {
              // Call the success callback or redirect to success page
              if (options?.onSuccess) {
                options.onSuccess({
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_signature: response.razorpay_signature,
                  registration: formData,
                  eventDetails,
                });
              } else {
                router.push(
                  `/registration-success?orderId=${response.razorpay_order_id}&eventId=${eventDetails.id}`
                );
              }
            } else {
              throw new Error("Payment verification failed");
            }
          } catch (error) {
            setError("Payment verification failed");
            if (options?.onError) options.onError(error);
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.mobile,
        },
        notes: {
          event: eventDetails.name,
          teamSize: teamSize.toString(),
        },
        theme: {
          color: "#1E40AF", // Blue-600
        },
      });

      razorpay.open();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Payment processing failed");
      if (options?.onError) options.onError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createPayment,
    isLoading,
    error,
  };
}
