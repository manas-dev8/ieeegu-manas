import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";


export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "ANNOUNCEMENTS",
      description:
        "The IEEE Student Branch at Galgotias University has some exciting announcements coming your way! Get ready for a series of engaging events, workshops, and networking opportunities designed to enhance your technical skills and industry exposure. Whether you're passionate about AI, robotics, cybersecurity, or emerging technologies, our upcoming initiatives will help you learn, collaborate, and innovate with like-minded peers and industry experts. Stay tuned for more updates and be a part of this incredible journey with IEEE at Galgotias University! .",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4",
    },
    {
      title: "IEEE SB EVENTS HIGHLIGHTS",
      description:
        "The IEEE Student Branch at Galgotias University (IEEE GU SB) actively organizes a wide range of technical and professional events throughout the year, providing students with opportunities to enhance their skills and knowledge in cutting-edge technologies. These events include hands-on workshops on Artificial Intelligence, IoT, Blockchain, and Robotics, as well as technical competitions. ",
      skeleton: <SkeletonTwo />,
      className: " col-span-1 lg:col-span-2 ",
    },
    
  ];
  return (
    <div className="relative z-20 pb-5 bg-white dark:bg-neutral-900 text-left lg:py-10 mx-5 p-2 sm:p-10 text-black dark:text-white mt-10">
      <div className="px-8">
        <p className="sm:text-sm lg:text-base max-w-7xl text-xs text-black dark:text-neutral-300 text-left sm:text-center font-normal">
          The IEEE Student Branch (SB) at Galgotias University is a vibrant community dedicated to fostering innovation, technical knowledge, and professional development among students passionate about engineering and technology. 
          The branch actively encourages research and paper presentations, providing students with opportunities to showcase their work at IEEE-sponsored events and conferences. Through guest lectures, industrial collaborations, and networking opportunities, IEEE GU SB connects students with industry professionals and the global IEEE network, helping them stay ahead in the ever-evolving technological landscape.
        </p>
      </div>
  
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-6 rounded-md gap-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={`${feature.className} dark:bg-neutral-800 dark:text-white`}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription className="dark:text-neutral-300">
                {feature.description}
              </FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
  
}

const FeatureTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <h3 className={cn("text-lg font-semibold text-black dark:text-white", className)}>{children}</h3>
);

const FeatureDescription = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <p className={cn("text-sm text-gray-700 dark:text-neutral-300", className)}>{children}</p>
);

const FeatureCard = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("p-4 sm:p-8 relative overflow-hidden bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-md", className)}>
      {children}
    </div>
  );
};

export const SkeletonOne = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [pausePosition, setPausePosition] = useState(0);

  const [announcements, setAnnouncements] = useState<{ title: string; content: string; date: string }[]>([]);
  
  // Fetch announcements from Sanity
React.useEffect(() => {
  // Normally this would be fetched from Sanity or an API
  // For now, using static data
  const mockAnnouncements = [
    {
      title: "Upcoming Workshop",
      content: "Join us for a hands-on AI workshop this Saturday at 2 PM in Engineering Block A.",
      date: "August 15, 2023"
    },
    {
      title: "IEEE Membership Drive",
      content: "Special discount on IEEE membership for freshers. Register now!",
      date: "August 20, 2023"
    },
    {
      title: "Technical Paper Competition",
      content: "Submit your research papers by September 10 for the annual IEEE technical paper competition.",
      date: "September 1, 2023"
    },
    {
      title: "Industry Talk Series",
      content: "Mr. Rajesh Kumar from Google will be speaking about career opportunities in AI.",
      date: "September 15, 2023"
    },
    {
      title: "Hackathon 2023",
      content: "48-hour coding marathon with exciting prizes. Registration open until September 25.",
      date: "October 1-2, 2023"
    }
  ];
  
  setAnnouncements(mockAnnouncements);
}, []);

  return (
    <div className="relative flex p-4 sm:p-6 mt-6 sm:mt-10 flex-col items-center gap-3 sm:gap-6 h-[50vh] sm:h-3/4 w-[90%] sm:w-full max-w-lg sm:max-w-4xl mx-auto overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white rounded-lg sm:rounded-xl shadow-lg sm:shadow-2xl">
      <motion.div
        className="flex flex-col text-left h-full w-full"
        animate={isHovered ? { y: pausePosition } : { y: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        onMouseEnter={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const offsetY = rect.top - e.clientY; // Save where the pause happened
          setPausePosition(offsetY);
          setIsHovered(true);
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        {announcements.map((announcement, index) => (
          <div key={index} className="mb-4">
            <p className="text-xs sm:text-base font-semibold">• {announcement.title}</p>
            <p className="text-xs sm:text-sm">{announcement.content}</p>
            <p className="text-xs text-gray-300">{announcement.date}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const SkeletonTwo = () => {
  const images = [
   
   "https://res.cloudinary.com/dgna3swph/image/upload/t_Thumbnail/v1737884369/5c41699a-273b-4db6-8a48-6e4c00bcee8e_ljsyfh.jpg",
   "https://res.cloudinary.com/dgna3swph/image/upload/t_Thumbnail/v1737884369/5c41699a-273b-4db6-8a48-6e4c00bcee8e_ljsyfh.jpg",
   "https://res.cloudinary.com/dgna3swph/image/upload/t_Thumbnail/v1737884369/5c41699a-273b-4db6-8a48-6e4c00bcee8e_ljsyfh.jpg",
   "https://res.cloudinary.com/dgna3swph/image/upload/t_Thumbnail/v1737884369/5c41699a-273b-4db6-8a48-6e4c00bcee8e_ljsyfh.jpg",
   "https://res.cloudinary.com/dgna3swph/image/upload/t_Thumbnail/v1737884369/5c41699a-273b-4db6-8a48-6e4c00bcee8e_ljsyfh.jpg",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full  overflow-hidden">
      {/* First Row */}
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            key={"images-first" + idx}
            variants={imageVariants}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 shadow-lg dark:shadow-neutral-900/50 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width="300"
              height="300"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>

      {/* Second Row */}
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 shadow-lg dark:shadow-neutral-900/50 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>

      {/* Third Row */}
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            key={"images-third" + idx}
            variants={imageVariants}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 shadow-lg dark:shadow-neutral-900/50 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-neutral-800 to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-neutral-800 to-transparent h-full pointer-events-none" />
    </div>
  );
};