import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "Let's Start",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg  md:text-sm font-normal mb-8">
          	Join the world&apos;s largest technical and research community.
          </p>
          <div>
            <Image
              src="https://res.cloudinary.com/dgna3swph/image/upload/v1741629516/1_irkc1u.png"
              alt="startup template"
              width={600}
              height={600}
              className="rounded-lg flex items-center object-contain h-50 w-50 "
            />
            
          </div>
        </div>
      ),
    },
    {
      title: "Step-1",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg  md:text-sm font-normal mb-8">
          	Visit the IEEE website: Go to the official IEEE membership page : 
            <a href="www.ieee.org/join" target="_blank"> www.ieee.org/join
          </a>
          </p>
          <div>
            <Image
              src="https://res.cloudinary.com/dgna3swph/image/upload/v1741629516/2_wsl6tt.png"
              alt="startup template"
              width={600}
              height={600}
              className="rounded-lg flex items-center object-contain h-50 w-50 "
            />
            
          </div>
        </div>
      ),
    },
    {
      title: "Step-2",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Choose the Student Membership option: Select the student membership that applies to your level of education (Undergraduate/Graduate)
          </p>
          <div>
            <Image
              src="https://res.cloudinary.com/dgna3swph/image/upload/v1741629516/3_p7z2i8.png"
              alt="hero template"
              width={600}
              height={600}
              className="rounded-lg rounded-lg flex items-center object-contain h-50 w-50 "
            />
            
          </div>
        </div>
      ),
    },
    {
      title: "Step-3",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Fill out the application form: Provide details such as your personal information, academic background, and institution. And Pay the membership fee. 
          </p>
          
          <div>
            <Image
              src="https://res.cloudinary.com/dgna3swph/image/upload/v1741629517/4_s7i8rq.png"
              alt="hero template"
              width={600}
              height={600}
              className="rounded-lg rounded-lg flex items-center object-contain h-50 w-50"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Step-4",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Once Payed, Share your Membership card with us.
          Once Payed, fill the google form here: <a href="https://docs.google.com/forms/d/e/1FAIpQLSe_04rBgryw0x71qGTbORYJPbtqM3Dlo0jGUsZBoyGXJI0LsA/viewform?usp=header " target="_blank">LINK
          </a>
          </p>
          
          <div >
            <Image
              src="https://res.cloudinary.com/dgna3swph/image/upload/v1741629517/5_kxwn32.png"
              alt="hero template"
              width={600}
              height={600}
              className="rounded-lg rounded-lg flex items-center object-contain h-50 w-50"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
