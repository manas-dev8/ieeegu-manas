"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState, useCallback } from "react";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const loadPromises = images.map(
          (image) =>
            new Promise<string>((resolve, reject) => {
              const img = new Image();
              img.src = image;
              img.onload = () => resolve(image);
              img.onerror = reject;
            })
        );

        const loaded = await Promise.all(loadPromises);
        setLoadedImages(loaded);
      } catch (error) {
        console.error("Failed to load images", error);
      }
    };

    loadImages();
  }, [images]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    let interval: NodeJS.Timeout | null = null;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (interval) clearInterval(interval);
    };
  }, [autoplay, handleNext, handlePrevious]);

  const slideVariants = {
    initial: { scale: 0, opacity: 1, rotateX: 45 },
    visible: { scale: 1, rotateX: 0, opacity: 1, transition: { duration: 0.5, ease: [0.645, 0.045, 0.355, 1.0] } },
    upExit: { opacity: 1, y: "-150%", transition: { duration: 1 } },
    downExit: { opacity: 1, y: "150%", transition: { duration: 1 } },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "relative w-full flex items-center justify-center overflow-hidden",
        "pt-[60px] pb-0 sm:pt-0", // Mobile: Adjust for navbar, Desktop: Fullscreen
        className
      )}
      style={{ perspective: "1000px" }}
    >
      {areImagesLoaded && children}
      {areImagesLoaded && overlay && <div className={cn("absolute inset-0 z-40", overlayClassName)} />}
      
      {areImagesLoaded && (
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial="initial"
            animate="visible"
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className="
              absolute inset-0 w-full h-auto 
              max-h-[calc(100vh-60px)] sm:max-h-screen 
              object-contain sm:object-cover
            "
          />
        </AnimatePresence>
      )}
    </div>
  );
};
