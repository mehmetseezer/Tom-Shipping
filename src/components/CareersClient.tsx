"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CareerForm from "./CareerForm";

interface CareersClientProps {
  dict: any;
  locale: string;
  common: any;
}

export default function CareersClient({ dict, locale, common }: CareersClientProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  } as const;

  return (
    <div className="w-full min-h-screen bg-slate-50">
      
      {/* 1. Page Header (Maersk Style with Image Background) */}
      <section className="relative w-full h-[220px] md:h-[280px] bg-slate-900 text-white flex items-center overflow-hidden border-b border-slate-850">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/careers-header.png"
            alt={dict.careers.title}
            fill
            priority
            className="object-cover opacity-60"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate-950/40" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-6">
          <span className="text-blue-400 font-bold text-xs tracking-widest uppercase">
            {dict.common.brand}
          </span>
          <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight text-white mt-1">
            {dict.careers.title}
          </h1>
          <div className="w-12 h-1 bg-blue-600 rounded-full my-2.5" />
          <p className="text-slate-250 text-xs md:text-sm max-w-xl leading-relaxed font-semibold">
            {dict.careers.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Main Career Cards & Form Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Info Columns (Stagger animate) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-8"
          >
            {/* Sea-based Careers */}
            <motion.div
              variants={itemVariants}
              className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm flex gap-5 hover:shadow-md transition-shadow group"
            >
              <div className="bg-slate-100 text-blue-600 p-3.5 h-fit rounded-xl shrink-0 border border-slate-200/50 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="5" fill="currentColor" fillOpacity="0.1" />
                  <g className="animate-spin-slow origin-center">
                    <circle cx="12" cy="12" r="7" />
                    <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" strokeLinecap="round" />
                  </g>
                  <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-display font-extrabold text-lg md:text-xl text-slate-900">
                  {dict.careers.seaTitle}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold">
                  {dict.careers.seaDesc}
                </p>
              </div>
            </motion.div>

            {/* Shore-based Careers */}
            <motion.div
              variants={itemVariants}
              className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm flex gap-5 hover:shadow-md transition-shadow group"
            >
              <div className="bg-slate-100 text-blue-600 p-3.5 h-fit rounded-xl shrink-0 border border-slate-200/50 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="4" y="3" width="16" height="18" rx="2" fill="currentColor" fillOpacity="0.1" />
                  <path d="M9 8h2M9 12h2M9 16h2M13 8h2M13 12h2M13 16h2" strokeLinecap="round" className="animate-pulse-slow" />
                  <path d="M2 21h20" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-display font-extrabold text-lg md:text-xl text-slate-900">
                  {dict.careers.shoreTitle}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold">
                  {dict.careers.shoreDesc}
                </p>
              </div>
            </motion.div>

            {/* General Callout */}
            <motion.div
              variants={itemVariants}
              className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm flex gap-5 hover:shadow-md transition-shadow group"
            >
              <div className="bg-blue-50 text-blue-600 p-3.5 h-fit rounded-xl shrink-0 border border-blue-100/50 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="7" width="18" height="12" rx="2" fill="currentColor" fillOpacity="0.1" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  <circle cx="12" cy="13" r="2" fill="currentColor" className="animate-pulse-slow" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-display font-extrabold text-slate-900 text-base">{dict.careers.cultureTitle}</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold">
                  {dict.careers.cultureDesc}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Career application Form (Animate from right side) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <CareerForm dict={dict.careers} common={common} locale={locale} />
          </motion.div>

        </div>
      </section>

    </div>
  );
}
