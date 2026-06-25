"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroCarouselProps {
  locale: string;
  dict: {
    slide1: { title: string; description: string };
    slide2: { title: string; description: string };
    slide3: { title: string; description: string };
  };
  common: {
    learnMore: string;
    contactUs: string;
  };
}

export default function HeroCarousel({ locale, dict, common }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slides = [
    {
      image: "/images/ship-1.png",
      video: "/videos/hero-ship.mp4",
      title: dict.slide1.title,
      description: dict.slide1.description,
    },
    {
      image: "/images/ship-2.png",
      video: "https://player.vimeo.com/external/459389137.sd.mp4?s=894386cc74c4ed82ec2da4076e0b793135b1d9df&profile_id=165&oauth2_token_id=57447761",
      title: dict.slide2.title,
      description: dict.slide2.description,
    },
    {
      image: "/images/ship-3.png",
      video: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c05430cf783cfd5d0ddfb07a048a1c97&profile_id=165&oauth2_token_id=57447761",
      title: dict.slide3.title,
      description: dict.slide3.description,
    },
  ];

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8500); // 8.5 seconds for video playback
    return () => clearInterval(timer);
  }, [handleNext]);

  // Framer Motion slide transition variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.6 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    }),
  };

  return (
    <div className="relative w-full h-[600px] md:h-[80vh] overflow-hidden bg-slate-950">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full z-10"
        >
          {/* Background Image Container - Placed inside AnimatePresence so it transitions smoothly with each slide */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            {/* Solid deep corporate blue overlay for text contrast */}
            <div className="absolute inset-0 bg-slate-950/75" />
          </div>

          {/* Slide Text Content */}
          <div className="absolute inset-0 flex items-center z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl text-left pt-12 pb-24 md:pb-36">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="flex items-center gap-2 mb-4"
                >
                  <span className="h-px w-8 bg-blue-500" />
                  <span className="text-blue-400 font-display font-semibold text-xs md:text-sm tracking-wider uppercase flex items-center gap-1.5">
                    <Compass className="w-4 h-4 animate-spin-slow" /> TOM SHIPPING MARITIME
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="font-display font-extrabold text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6"
                >
                  {slides[currentIndex].title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-slate-300 text-sm md:text-base lg:text-lg leading-relaxed mb-8"
                >
                  {slides[currentIndex].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    href={`/${locale}/services`}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm md:text-base px-6 py-3 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    {common.learnMore}
                  </Link>
                  <Link
                    href={`/${locale}/contact`}
                    className="border border-slate-400 hover:border-white text-white hover:bg-white/10 font-bold text-sm md:text-base px-6 py-3 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                  >
                    {common.contactUs}
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Manual Slide Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-slate-900/60 text-white hover:bg-blue-600 hover:text-white border border-slate-700/50 hover:border-blue-600 transition-all duration-300 cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-slate-900/60 text-white hover:bg-blue-600 hover:text-white border border-slate-700/50 hover:border-blue-600 transition-all duration-300 cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Progress Tabs (Desktop Only) - Lifted to bottom-32 to prevent overlap */}
      <div className="absolute bottom-32 left-0 right-0 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden md:block">
        <div className="grid grid-cols-3 gap-6 border-t border-white/20 pt-4">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className="text-left group cursor-pointer focus:outline-none"
            >
              {/* Progress bar line */}
              <div className="h-0.5 w-full bg-white/25 rounded-full overflow-hidden mb-2">
                <div
                  className={`h-full bg-blue-500 transition-all duration-300 ${
                    index === currentIndex ? "w-full" : "w-0 group-hover:w-1/3"
                  }`}
                />
              </div>
              {/* Title & Index */}
              <span className="block text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-1">
                0{index + 1}
              </span>
              <span
                className={`block text-xs font-bold font-display line-clamp-1 transition-colors duration-200 ${
                  index === currentIndex ? "text-white" : "text-slate-400 group-hover:text-slate-200"
                }`}
              >
                {slide.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Pagination Dots (Mobile Only) - Lifted to bottom-28 to prevent overlap */}
      <div className="absolute bottom-28 left-0 right-0 z-30 flex justify-center gap-2.5 md:hidden">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-8 bg-blue-500" : "w-2.5 bg-slate-500/70 hover:bg-slate-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
