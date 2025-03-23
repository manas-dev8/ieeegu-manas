"use client";

import { useEffect } from "react";
import FeaturesSectionDemo from "@/components/ui/feature";
import ScrollingBanner from "@/components/scrolling-banner";
import { ImagesSliderDemo } from "@/components/imageslider";
import Intro from "@/components/Intro";
import { WorldMapDemo } from "@/components/world-mapcomp";
import StudentBranchChapters from "@/components/sbc";

export default function HomePage() {
    useEffect(() => {
        document.documentElement.classList.add("dark"); // Ensure dark mode globally
    }, []);

    return (
        <div className="min-h-screen dark:bg-gray-900 dark:text-white">
            <div className="relative flex items-center justify-center h-[30vh] md:min-h-screen">
                <ImagesSliderDemo />
            </div>
            <ScrollingBanner />
            <Intro />
            <StudentBranchChapters />
            <FeaturesSectionDemo />
            <WorldMapDemo />
        </div>
    );
}
