import { PolicyLayout } from '@/components/policy-layout';

export const metadata = {
  title: 'Privacy Policy | IEEE GU',
  description: 'Privacy Policy for IEEE Galgotias University website and events.',
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout title="Privacy Policy" lastUpdated="March 15, 2024">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-800">1. Introduction</h2>
          <p className="text-gray-700">
            IEEE Galgotias University ("we," "our," or "us") is committed to protecting the privacy of our website visitors and event participants. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or participate in our events, including Young Minds.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-800">2. Information We Collect</h2>
          <p className="text-gray-700 mb-3">We may collect the following types of information:</p>
          
          <h3 className="font-semibold text-blue-700 mt-4 mb-2">2.1 Personal Information</h3>
          <ul className="list-disc pl-6 mb-3 space-y-1 text-gray-700">
            <li>Name, email address, phone number, and affiliation/college</li>
            <li>Payment information when registering for events (processed securely through Razorpay)</li>
            <li>Academic information relevant to event participation</li>
            <li>Team member information when registering as a team</li>
          </ul>
          
          <h3 className="font-semibold text-blue-700 mt-4 mb-2">2.2 Automatically Collected Information</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>IP address and device information</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on our website</li>
            <li>Referring website or source</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-800">3. How We Use Your Information</h2>
          <p className="text-gray-700 mb-3">We use the information we collect for various purposes, including:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Processing event registrations and payments</li>
            <li>Communicating with you about events, including sending confirmation emails and important updates</li>
            <li>Creating and distributing participation certificates</li>
            <li>Improving our website and services</li>
            <li>Analyzing usage patterns and trends</li>
            <li>Sending newsletters and promotional materials (if you have opted in)</li>
            <li>Complying with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-800">4. How We Share Your Information</h2>
          <p className="text-gray-700 mb-3">We may share your information with:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Payment Processors:</strong> We share necessary information with Razorpay to process your payments.</li>
            <li><strong>Event Partners:</strong> For jointly organized events, we may share participant information with co-organizing institutions or sponsors.</li>
            <li><strong>Service Providers:</strong> We may engage trusted third parties to help us operate our website and conduct our events.</li>
            <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid requests by public authorities.</li>
          </ul>
          <p className="text-gray-700 mt-3">
            We will never sell your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-800">5. Data Security</h2>
          <p className="text-gray-700 mb-3">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
          <p className="text-gray-700">
            Payment information is handled securely by Razorpay, which maintains industry-standard security measures.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-800">6. Data Retention</h2>
          <p className="text-gray-700">
            We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. For event registrations, we typically retain personal information for up to three years after the event for record-keeping purposes and to facilitate communication about future related events.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-800">7. Your Rights</h2>
          <p className="text-gray-700 mb-3">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>The right to access the personal information we hold about you</li>
            <li>The right to request correction of inaccurate information</li>
            <li>The right to request deletion of your information</li>
            <li>The right to object to processing of your information</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
          <p className="text-gray-700 mt-3">
            To exercise these rights, please contact us at ieeegu@galgotiasuniversity.edu.in.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-800">8. Cookies and Similar Technologies</h2>
          <p className="text-gray-700">
            Our website uses cookies and similar tracking technologies to enhance user experience and collect usage information. You can set your browser to refuse all or some browser cookies, but this may affect your ability to access certain features of our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-800">9. Children's Privacy</h2>
          <p className="text-gray-700">
            Our website and events are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to remove that information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-800">10. Changes to This Privacy Policy</h2>
          <p className="text-gray-700">
            We may update our Privacy Policy from time to time. Any changes will be posted on this page with a revised "last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-800">11. Contact Us</h2>
          <p className="text-gray-700">
            If you have questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <address className="text-gray-700 mt-2 not-italic">
            IEEE Galgotias University<br />
            Email: ieeegu@galgotiasuniversity.edu.in<br />
            Address: Room 305, Block C, Galgotias University, Greater Noida, Uttar Pradesh
          </address>
        </section>
      </div>
    </PolicyLayout>
  );
}
