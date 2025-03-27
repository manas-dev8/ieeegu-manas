"use client";

import React from "react";
import Image from "next/image";
// import { AuroraBackgroundDemo } from "@/components/aurorabg";

const chapters = [
  {
    logo: "https://res.cloudinary.com/dgna3swph/image/upload/v1741585370/8-removebg-preview_dfvg0l.png",
  },
  {
    logo: "https://res.cloudinary.com/dgna3swph/image/upload/v1741585370/6-removebg-preview_uathl1.png",
  },
  {
    logo: "https://res.cloudinary.com/dgna3swph/image/upload/v1741585370/7-removebg-preview_3_mpuv5a.png",
  },
];

const StudentBranchChapters = () => {
  return (
    <div className="relative flex items-center justify-center w-full">
      {/* Aurora Background */}
      {/* <div className="absolute inset-0 z-0">
        <AuroraBackgroundDemo />
      </div> */}

      {/* Content Wrapper */}
      <div className="relative m-5 sm:m-10 text-black dark:text-white py-6 px-4 sm:py-10 sm:px-5 flex flex-col items-center mx-10">
        {/* Title */}
        <h1 className="text-2xl sm:text-4xl md:text-3xl font-bold text-black dark:text-white p-2 sm:p-3 text-center mb-4 whitespace-nowrap">
          IEEE Student Branch Chapters
        </h1>

        {/* Logos with Glow Effect in Dark Mode */}
        <div className="flex sm:flex-wrap justify-center gap-4 sm:gap-8 overflow-x-auto sm:overflow-visible w-full items-center">
          {chapters.map((chapter, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={chapter.logo}
                alt="SBC"
                width={400}
                height={400}
                className="w-20 h-20 sm:w-60 sm:h-60 object-contain 
                transition duration-300 ease-in-out 
                dark:drop-shadow-[0_0_15px_rgba(0,255,233,0.6)] 
                dark:brightness-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentBranchChapters;
