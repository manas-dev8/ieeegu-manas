import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import { OrderCreatePayload } from "@/types/payment";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  try {
    // Verify API keys are available
    const key_id = process.env.RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;
    
    if (!key_id || !key_secret) {
      console.error("Razorpay API keys are missing from environment variables");
      return NextResponse.json(
        { error: "Payment service configuration error" },
        { status: 500 }
      );
    }

    // Initialize Razorpay only when needed inside the request handler
    const razorpay = new Razorpay({
      key_id,
      key_secret,
    });

    const body: OrderCreatePayload = await request.json();
    const { formData, eventDetails, teamSize, amount } = body;

    // Generate a unique receipt ID
    const receiptId = crypto.randomBytes(16).toString("hex");

    // Create Razorpay order (amount in paisa - multiply by 100)
    const order = await razorpay.orders.create({
      amount: amount * 100, // convert to paisa
      currency: "INR",
      receipt: receiptId,
      notes: {
        eventId: eventDetails.id,
        eventName: eventDetails.name,
        customerName: formData.name,
        customerEmail: formData.email,
        customerPhone: formData.mobile,
        teamSize: String(teamSize),
      },
    });

    return NextResponse.json({ order }, { status: 200 });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { error: "Error creating payment order" },
      { status: 500 }
    );
  }
}
