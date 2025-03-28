import { PolicyLayout } from '@/components/policy-layout';
import Image from 'next/image';

export const metadata = {
  title: 'About Us | IEEE GU',
  description: 'Learn about IEEE Galgotias University and our mission to promote technology education and innovation.',
};

export default function AboutPage() {
  return (
    <PolicyLayout title="About IEEE Galgotias University">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Our Mission</h2>
          <p className="text-gray-700">
            IEEE Galgotias University Student Branch is dedicated to fostering technological innovation and excellence for the benefit of humanity. We aim to inspire students to pursue excellence in their chosen fields and contribute meaningfully to technological advancement through education, collaboration, and practical application of knowledge.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2015, IEEE Galgotias University is a student branch of the world's largest technical professional organization, the Institute of Electrical and Electronics Engineers (IEEE). Our branch operates under the Delhi Section of IEEE Region 10 and serves students across various disciplines of engineering and technology at Galgotias University.
          </p>
          <p className="text-gray-700">
            Led by passionate student volunteers and guided by faculty advisors, our branch offers a platform for students to develop technical skills, leadership abilities, and professional networks beyond the classroom.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Technical Events</h3>
              <p className="text-gray-700">
                We organize workshops, seminars, coding competitions, hackathons, and technical symposiums like Young Minds that bring together students, academics, and industry professionals to share knowledge and inspire innovation.
              </p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Skill Development</h3>
              <p className="text-gray-700">
                Through hands-on sessions and projects, we help students develop practical skills that complement their academic learning and prepare them for professional challenges.
              </p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Networking</h3>
              <p className="text-gray-700">
                We connect students with professionals and experts through guest lectures, industry visits, and networking sessions, creating valuable opportunities for mentorship and career guidance.
              </p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Research & Publication</h3>
              <p className="text-gray-700">
                We encourage and support students in research activities and help them publish their work through IEEE-affiliated journals and conferences.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Our Society Chapters</h2>
          <p className="text-gray-700 mb-4">
            IEEE GU hosts several specialized society chapters that focus on specific fields within technology:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Computer Society:</strong> Focusing on advanced computing, software engineering, and information technology.</li>
            <li><strong>Women in Engineering (WIE):</strong> Supporting the recruitment and retention of women in technical disciplines.</li>
            <li><strong>Industry Applications Society:</strong> Bridging the gap between theoretical knowledge and industrial applications.</li>
            <li><strong>Power & Energy Society:</strong> Concentrating on electrical power and energy engineering challenges.</li>
          </ul>
        </section>

        <section>
  <h2 className="text-2xl font-bold mb-4 text-blue-800">Leadership Team</h2>
  <div className="grid md:grid-cols-3 gap-6">
    <div className="text-center">
      <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
        <img 
          src="https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1741289813/Aanjey_wkazg5.jpg" 
          alt="Dr. Aanjey Mani Tripathi" 
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="font-bold">Dr. Aanjey Mani Tripathi</h3>
      <p className="text-blue-600">Branch Counselor</p>
    </div>

    <div className="text-center">
      <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
        <img 
          src="https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1739005300/shubhranshu_hfxnd7.png" 
          alt="Shubhranshu Shekhar Dash" 
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="font-bold">Shubhranshu Shekhar Dash</h3>
      <p className="text-blue-600">Chairperson</p>
    </div>

    <div className="text-center">
      <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
        <img 
          src="https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1739005302/anurag_brdjdq.png" 
          alt="anurag" 
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="font-bold">Anurag Kumar Singh</h3>
      <p className="text-blue-600">Vice-Chairperson</p>
    </div>
  </div>
</section>


        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Our Achievements</h2>
          <p className="text-gray-700 mb-4">
            IEEE Galgotias University has established itself as one of the most active student branches in the Delhi Section:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Exemplary Student Branch Award, IEEE Delhi Section, 2023</li>
            <li>Best Student Branch Website, IEEE Region 10, 2022</li>
            <li>Outstanding WIE Student Branch Affinity Group, 2021</li>
            <li>Successfully organized 50+ technical events with 5000+ participants over the last three years</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Join Us</h2>
          <p className="text-gray-700 mb-4">
            IEEE membership offers unmatched opportunities for students to grow personally and professionally. Join our branch to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Connect with like-minded peers and industry professionals</li>
            <li>Access exclusive technical resources and IEEE's vast digital library</li>
            <li>Participate in competitions and events at local, national, and international levels</li>
            <li>Develop leadership and organizational skills by volunteering for branch activities</li>
            <li>Enhance your resume with IEEE membership and participation certificates</li>
          </ul>
        </section>

        <section className="border-t border-gray-200 pt-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Contact Us</h2>
          <p className="text-gray-700">
            For inquiries about IEEE Galgotias University, membership, or our events, please email us at ieeegu@galgotiasuniversity.edu.in or visit our office at Room 305, Block C, Galgotias University, Greater Noida, Uttar Pradesh.
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
}
