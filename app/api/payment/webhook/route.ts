import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { updatePaymentStatus } from "@/lib/registration";

export async function POST(request: NextRequest) {
  try {
    const key_secret = process.env.RAZORPAY_KEY_SECRET;
    
    if (!key_secret) {
      console.error("Razorpay API key secret is missing from environment variables");
      return NextResponse.json(
        { error: "Payment service configuration error" },
        { status: 500 }
      );
    }

    const body = await request.text();
    const signature = request.headers.get("x-razorpay-signature") || "";

    // Verify webhook signature
    const expectedSignature = crypto
      .createHmac("sha256", key_secret)
      .update(body)
      .digest("hex");

    const isValid = expectedSignature === signature;

    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid webhook signature" },
        { status: 400 }
      );
    }

    const webhookData = JSON.parse(body);
    const event = webhookData.event;
    
    // Handle various payment events
    switch (event) {
      case "payment.authorized":
        await handlePaymentAuthorized(webhookData.payload.payment.entity);
        break;
      case "payment.failed":
        await handlePaymentFailed(webhookData.payload.payment.entity);
        break;
      case "refund.processed":
        await handleRefundProcessed(webhookData.payload.refund.entity);
        break;
      default:
        console.log(`Unhandled webhook event: ${event}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Error processing webhook" },
      { status: 500 }
    );
  }
}

async function handlePaymentAuthorized(payment: any) {
  // Update payment status to success
  await updatePaymentStatus(payment.order_id, payment.id, "success");
}

async function handlePaymentFailed(payment: any) {
  // Update payment status to failed
  await updatePaymentStatus(payment.order_id, payment.id, "failed");
}

async function handleRefundProcessed(refund: any) {
  // Handle refund logic if needed
  console.log(`Refund processed for payment ${refund.payment_id}`);
}
