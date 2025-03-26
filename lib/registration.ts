import { RegistrationData } from "@/types/payment";

// In a real application, this would connect to a database
// For now, we'll store in memory for demo purposes
const registrations: RegistrationData[] = [];

export async function saveRegistration(data: RegistrationData): Promise<void> {
  // For a real app, this would be a database operation
  registrations.push(data);
  console.log(`Registration saved: ${data.name} for ${data.eventDetails.name}`);
  
  // In a real implementation, you'd use a database:
  // Example with MongoDB:
  // await db.collection('registrations').insertOne(data);
  
  return Promise.resolve();
}

export async function updatePaymentStatus(
  orderId: string,
  paymentId: string,
  status: "success" | "failed" | "pending"
): Promise<void> {
  // Find the registration with the given order ID
  const registration = registrations.find(
    (reg) => reg.payment.orderId === orderId
  );
  
  if (registration) {
    registration.payment.status = status;
    registration.payment.paymentId = paymentId;
    console.log(`Payment status updated for order ${orderId} to ${status}`);
  }
  
  // In a real implementation with a database:
  // await db.collection('registrations').updateOne(
  //   { "payment.orderId": orderId },
  //   { $set: { "payment.status": status, "payment.paymentId": paymentId } }
  // );
  
  return Promise.resolve();
}

export async function getRegistrationByOrderId(
  orderId: string
): Promise<RegistrationData | null> {
  // Find the registration with the given order ID
  const registration = registrations.find(
    (reg) => reg.payment.orderId === orderId
  );
  
  // In a real implementation:
  // const registration = await db.collection('registrations').findOne({ "payment.orderId": orderId });
  
  return registration || null;
}
