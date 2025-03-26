export interface EventDetails {
  id: string;
  name: string;
  date: string;
  venue: string;
  organizer: string;
  pricePerPerson: number;
  fixedPrice?: number;
  minTeamSize: number;
  maxTeamSize: number;
  isFixedPrice: boolean;
}

export interface RegistrationFormData {
  name: string;
  email: string;
  mobile: string;
  affiliation: string;
  selectedEvent: string;
  teamMembers: {
    name: string;
  }[];
}

export interface OrderCreatePayload {
  formData: RegistrationFormData;
  eventDetails: EventDetails;
  teamSize: number;
  amount: number;
}

export interface OrderData {
  id: string;
  entity: string;
  amount: number;
  amount_paid: number;
  amount_due: number;
  currency: string;
  receipt: string;
  status: string;
  attempts: number;
  notes: {
    [key: string]: string;
  };
  created_at: number;
}

export interface PaymentVerificationPayload {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
  registration: RegistrationFormData;
  eventDetails: EventDetails;
}

export interface RegistrationData extends RegistrationFormData {
  eventDetails: EventDetails;
  payment: {
    orderId: string;
    paymentId: string;
    signature: string;
    amount: number;
    status: "success" | "failed" | "pending";
    timestamp: string;
  };
  teamSize: number;
}

export interface UseRazorpayOptions {
  onSuccess?: (data: PaymentVerificationPayload) => void;
  onError?: (error: any) => void;
}
