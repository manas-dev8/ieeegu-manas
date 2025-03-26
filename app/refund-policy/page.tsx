import { PolicyLayout } from '@/components/policy-layout';

export const metadata = {
  title: 'Refund Policy | IEEE GU',
  description: 'Refund policy for IEEE Galgotias University events including Young Minds.',
};

export default function RefundPolicyPage() {
  return (
    <PolicyLayout title="Refund Policy" lastUpdated="March 15, 2024">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-800">1. Registration Cancellation by Participant</h2>
          <p className="text-gray-700 mb-3">
            If you wish to cancel your registration for any IEEE Galgotias University event, including Young Minds:
          </p>
          <ul className="list-disc pl-6 mb-3 space-y-2 text-gray-700">
            <li>Cancellations made 7 or more days before the event date: Full refund, less a 10% administrative fee.</li>
            <li>Cancellations made 3-6 days before the event date: 50% refund.</li>
            <li>Cancellations made less than 3 days before the event date: No refund.</li>
          </ul>
          <p className="text-gray-700">
            All cancellation requests must be submitted in writing to ieeegu@galgotiasuniversity.edu.in with the subject line "Event Cancellation - [Your Name]".
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-800">2. Event Cancellation by IEEE GU</h2>
          <p className="text-gray-700 mb-3">
            If IEEE Galgotias University cancels an event for any reason:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>All participants will receive a full refund of their registration fees.</li>
            <li>Refunds will be processed automatically through the original payment method.</li>
            <li>We are not responsible for any other expenses incurred by participants (such as travel or accommodation arrangements).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-800">3. Event Rescheduling</h2>
          <p className="text-gray-700 mb-3">
            If IEEE Galgotias University reschedules an event:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Your registration will automatically transfer to the new date.</li>
            <li>If you are unable to attend on the new date, you may request a full refund within 7 days of the rescheduling announcement.</li>
            <li>If the rescheduling notice is given less than 3 days before the original event date, all participants will have the option for a full refund regardless of the new date.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-800">4. No-Show Policy</h2>
          <p className="text-gray-700">
            Participants who do not attend an event without prior cancellation notice ("no-shows") are not eligible for refunds.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-800">5. Refund Processing</h2>
          <p className="text-gray-700 mb-3">
            All approved refunds will be processed within 10-14 business days after the refund request is approved. Refunds will be issued through the original payment method used for registration.
          </p>
          <p className="text-gray-700">
            For payments made via Razorpay, refunds will be processed back to the original payment source according to Razorpay's processing timelines.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-800">6. Exceptions</h2>
          <p className="text-gray-700">
            Exceptions to this refund policy may be considered on a case-by-case basis for extenuating circumstances such as medical emergencies or bereavement. Supporting documentation may be required. Please contact ieeegu@galgotiasuniversity.edu.in to discuss your specific situation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-800">7. Changes to This Policy</h2>
          <p className="text-gray-700">
            IEEE Galgotias University reserves the right to modify this refund policy at any time. Any changes will not affect registrations that have already been confirmed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-800">8. Contact Information</h2>
          <p className="text-gray-700">
            For questions regarding this refund policy or to request a refund, please contact: ieeegu@galgotiasuniversity.edu.in
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
}
