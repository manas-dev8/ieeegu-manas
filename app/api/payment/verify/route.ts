import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { PaymentVerificationPayload, RegistrationData } from "@/types/payment";
import { saveRegistration } from "@/lib/registration";

export async function POST(request: NextRequest) {
  try {
    // Verify API keys are available
    const key_secret = process.env.RAZORPAY_KEY_SECRET;
    
    if (!key_secret) {
      console.error("Razorpay API key secret is missing from environment variables");
      return NextResponse.json(
        { success: false, error: "Payment service configuration error" },
        { status: 500 }
      );
    }

    const body: PaymentVerificationPayload = await request.json();
    
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      registration,
      eventDetails,
    } = body;

    // Verify the signature
    const text = razorpay_order_id + "|" + razorpay_payment_id;
    const generated_signature = crypto
      .createHmac("sha256", key_secret)
      .update(text)
      .digest("hex");

    // Check if the signatures match
    const isAuthentic = generated_signature === razorpay_signature;

    if (!isAuthentic) {
      return NextResponse.json(
        { success: false, error: "Payment verification failed" },
        { status: 400 }
      );
    }

    // Calculate team size
    const teamSize = 1 + (registration.teamMembers?.length || 0);
    
    // Calculate amount
    const amount = eventDetails.isFixedPrice 
      ? eventDetails.fixedPrice || 0
      : eventDetails.pricePerPerson * teamSize;

    // Create registration data with payment info
    const registrationData: RegistrationData = {
      ...registration,
      eventDetails,
      teamSize,
      payment: {
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
        signature: razorpay_signature,
        amount,
        status: "success",
        timestamp: new Date().toISOString(),
      },
    };

    // Save the registration with payment info
    await saveRegistration(registrationData);

    return NextResponse.json({
      success: true,
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
    });
  } catch (error) {
    console.error("Error verifying payment:", error);
    return NextResponse.json(
      { success: false, error: "Error verifying payment" },
      { status: 500 }
    );
  }
}
