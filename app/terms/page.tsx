import { PolicyLayout } from '@/components/policy-layout';

export const metadata = {
  title: 'Terms & Conditions | IEEE GU',
  description: 'Terms and conditions for IEEE Galgotias University events and website usage.',
};

export default function TermsPage() {
  return (
    <PolicyLayout title="Terms & Conditions" lastUpdated="March 15, 2024">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-800">1. Acceptance of Terms</h2>
          <p className="text-gray-700">
            By accessing and using the IEEE Galgotias University website and participating in our events, including Young Minds, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use this website or participate in our events.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-800">2. Registration and Participation</h2>
          <p className="text-gray-700 mb-3">
            When registering for events, including Young Minds, you agree to provide accurate, current, and complete information. IEEE Galgotias University reserves the right to refuse registration or participation to any individual or team at its discretion.
          </p>
          <p className="text-gray-700 mb-3">
            Participants must adhere to the specific rules and guidelines of each event or competition. Failure to comply may result in disqualification without refund.
          </p>
          <p className="text-gray-700">
            Participation certificates will only be issued to those who actively participate in the events according to the specified requirements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-800">3. Payment Terms</h2>
          <p className="text-gray-700 mb-3">
            All payments made through our website are processed securely via Razorpay. By making a payment, you agree to comply with Razorpay's terms of service.
          </p>
          <p className="text-gray-700 mb-3">
            Registration is confirmed only upon successful payment of the applicable fees. Prices for events are as indicated on the event registration page.
          </p>
          <p className="text-gray-700">
            IEEE Galgotias University reserves the right to modify event fees at any time. Any changes will not affect previously confirmed registrations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-800">4. Intellectual Property</h2>
          <p className="text-gray-700 mb-3">
            All content on this website, including but not limited to text, graphics, logos, images, audio clips, and software, is the property of IEEE Galgotias University or its content suppliers and is protected by copyright laws.
          </p>
          <p className="text-gray-700">
            Participants retain ownership of their original work submitted during competitions and events. However, by participating, you grant IEEE Galgotias University a non-exclusive, royalty-free license to use, reproduce, and display your submissions for promotional and educational purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-800">5. Code of Conduct</h2>
          <p className="text-gray-700 mb-3">
            Participants are expected to conduct themselves professionally and respectfully during all IEEE Galgotias University events. Harassment, discrimination, or disruptive behavior of any kind will not be tolerated.
          </p>
          <p className="text-gray-700">
            IEEE Galgotias University reserves the right to remove any participant from an event for violating the code of conduct, without refund.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-800">6. Limitation of Liability</h2>
          <p className="text-gray-700 mb-3">
            IEEE Galgotias University and its affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from your use of the website or participation in events.
          </p>
          <p className="text-gray-700">
            We are not responsible for any loss or damage to personal belongings during events. Participants are advised to take care of their personal property.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-800">7. Changes to Terms</h2>
          <p className="text-gray-700">
            IEEE Galgotias University reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on the website. Your continued use of the website or participation in events after such changes constitutes your acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-800">8. Contact Information</h2>
          <p className="text-gray-700">
            If you have any questions about these Terms and Conditions, please contact us at ieeegu@galgotiasuniversity.edu.in.
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
}
