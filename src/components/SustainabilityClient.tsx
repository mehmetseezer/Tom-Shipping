"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, HeartPulse, Leaf, FileText } from "lucide-react";
import { motion } from "framer-motion";

interface SustainabilityClientProps {
  dict: any;
  locale: string;
}

export default function SustainabilityClient({ dict, locale }: SustainabilityClientProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  } as const;

  return (
    <div className="w-full min-h-screen bg-slate-50">
      
      {/* 1. Page Header (Maersk Style with Image Background) */}
      <section className="relative w-full h-[220px] md:h-[280px] bg-slate-900 text-white flex items-center overflow-hidden border-b border-slate-850">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sustainability-header.png"
            alt={dict.sustainability.title}
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
            {dict.sustainability.title}
          </h1>
          <div className="w-12 h-1 bg-blue-600 rounded-full my-2.5" />
          <p className="text-slate-250 text-xs md:text-sm max-w-xl leading-relaxed font-semibold">
            {dict.sustainability.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HSEQ Card (With fade-up animation) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-sm mb-16 flex flex-col gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="bg-slate-100 text-blue-600 p-3 rounded-xl border border-slate-200/50">
              <HeartPulse className="w-6.5 h-6.5" />
            </div>
            <h2 className="font-display font-extrabold text-2xl text-slate-900">
              {dict.sustainability.hseq}
            </h2>
          </div>
          <div className="w-16 h-1 bg-blue-600 rounded-full" />
          <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold">
            {dict.home.intro.p1}
          </p>
        </motion.div>

        {/* Dynamic Multi-column Segment */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Pillar 1: Safety */}
          <motion.div
            variants={itemVariants}
            className="bg-white border border-slate-200 p-8 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-350 group"
          >
            <div className="text-blue-600 self-start p-1.5 bg-blue-50 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" className="animate-pulse-slow" />
              </svg>
            </div>
            <h3 className="font-display font-extrabold text-lg md:text-xl text-slate-900">
              {dict.sustainability.safetyFirst}
            </h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold">
              {dict.sustainability.safetyFirstDesc}
            </p>
          </motion.div>

          {/* Pillar 2: Environment */}
          <motion.div
            variants={itemVariants}
            className="bg-white border border-slate-200 p-8 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-350 group"
          >
            <div className="text-blue-600 self-start p-1.5 bg-blue-50 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                <circle cx="12" cy="12" r="8" strokeDasharray="4 4" className="animate-spin-slow opacity-30" />
              </svg>
            </div>
            <h3 className="font-display font-extrabold text-lg md:text-xl text-slate-900">
              {dict.sustainability.ecoTitle}
            </h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold">
              {dict.sustainability.ecoDesc}
            </p>
          </motion.div>

          {/* Pillar 3: Compliance */}
          <motion.div
            variants={itemVariants}
            className="bg-white border border-slate-200 p-8 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-350 group"
          >
            <div className="text-blue-600 self-start p-1.5 bg-blue-50 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="6" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth="2.5" className="animate-pulse-slow" />
              </svg>
            </div>
            <h3 className="font-display font-extrabold text-lg md:text-xl text-slate-900">
              {dict.sustainability.complianceTitle}
            </h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold">
              {dict.sustainability.complianceDesc}
            </p>
          </motion.div>
        </motion.div>

      </section>
    </div>
  );
}
