import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { FlipWords } from "@/components/ui/flip-words";

export default function Intro() {
  const words = [
    "better",
    "Inclusive",
    "beautiful",
    "modern",
    "Dynamic",
    "Diverse",
    "Innovative",
    "Creative",
    "Inspiring",
    "Empowering",
    "Impactful",
    "Sustainable",
    "Accessible",
    "Engaging",
    "Interactive",
    "Responsible",
    "Intuitive",
    "Reliable",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col justify-center items-center mt-20 dark:bg-gray-900"
    >
      <div className="relative text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-4">
          WE ARE IEEE STUDENT BRANCH
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-red-600 dark:text-red-400 mb-8">
          Galgotias University
        </h2>
        <Link
          href="/about"
          className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors duration-300"
        >
          Explore More
        </Link>
        <div className="text-4xl mx-auto pt-5 font-semibold text-black dark:text-white">
          Join a <FlipWords className="text-red dark:text-red-400" words={words} /> <br />
          Technology and Research Community.
        </div>
      </div>
    </motion.div>
  );
}