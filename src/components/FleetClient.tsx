"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface FleetClientProps {
  dict: any;
  locale: string;
}

export default function FleetClient({ dict, locale }: FleetClientProps) {
  const renderVesselIcon = () => {
    return (
      <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>{`
          @keyframes wave-move {
            0% { transform: translateX(0); }
            50% { transform: translateX(-6px); }
            100% { transform: translateX(0); }
          }
          .wave-line {
            animation: wave-move 4s ease-in-out infinite;
          }
        `}</style>
        {/* Hull & Deck */}
        <path d="M8 30 L11 36 L75 36 L84 29 L86 24 L81 24 L78 27 L18 27 L8 30 Z" fill="currentColor" opacity="0.9" />
        {/* Cabin Stern */}
        <rect x="15" y="16" width="12" height="11" fill="currentColor" />
        <rect x="18" y="9" width="7" height="7" fill="currentColor" />
        <line x1="20" y1="9" x2="20" y2="5" stroke="currentColor" strokeWidth="1.5" />
        {/* Hatches */}
        <rect x="32" y="24" width="8" height="3" fill="currentColor" opacity="0.75" />
        <rect x="45" y="24" width="8" height="3" fill="currentColor" opacity="0.75" />
        <rect x="58" y="24" width="8" height="3" fill="currentColor" opacity="0.75" />
        {/* Wave lines */}
        <path className="wave-line" d="M -10 40 Q 0 38 10 40 T 30 40 T 50 40 T 70 40 T 90 40 T 110 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path className="wave-line" d="M -5 43 Q 5 41 15 43 T 35 43 T 55 43 T 75 43 T 95 43 T 115 43" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" style={{ animationDelay: '1.5s' }} />
      </svg>
    );
  };

  const vesselsList = [
    {
      name: dict.fleet.vessels.v1.name,
      type: dict.fleet.vessels.v1.type,
      dwt: dict.fleet.vessels.v1.dwt,
      built: dict.fleet.vessels.v1.built,
      flag: dict.fleet.vessels.v1.flag,
    },
    {
      name: dict.fleet.vessels.v2.name,
      type: dict.fleet.vessels.v2.type,
      dwt: dict.fleet.vessels.v2.dwt,
      built: dict.fleet.vessels.v2.built,
      flag: dict.fleet.vessels.v2.flag,
    },
    {
      name: dict.fleet.vessels.v3.name,
      type: dict.fleet.vessels.v3.type,
      dwt: dict.fleet.vessels.v3.dwt,
      built: dict.fleet.vessels.v3.built,
      flag: dict.fleet.vessels.v3.flag,
    },
    {
      name: dict.fleet.vessels.v4.name,
      type: dict.fleet.vessels.v4.type,
      dwt: dict.fleet.vessels.v4.dwt,
      built: dict.fleet.vessels.v4.built,
      flag: dict.fleet.vessels.v4.flag,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.98, y: 15 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
  } as const;

  return (
    <div className="w-full min-h-screen bg-slate-50">
      
      {/* 1. Page Header (Maersk Style with Image Background) */}
      <section className="relative w-full h-[220px] md:h-[280px] bg-slate-900 text-white flex items-center overflow-hidden border-b border-slate-850">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/fleet-header.png"
            alt={dict.fleet.title}
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
            {dict.fleet.title}
          </h1>
          <div className="w-12 h-1 bg-blue-600 rounded-full my-2.5" />
          <p className="text-slate-250 text-xs md:text-sm max-w-xl leading-relaxed font-semibold">
            {dict.fleet.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Intro Context */}
      <section className="py-16 bg-white border-b border-slate-200/60 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-slate-600 text-sm md:text-base leading-relaxed font-semibold"
          >
            {dict.fleet.intro}
          </motion.p>
        </div>
      </section>

      {/* 3. Vessel Registry Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-black text-2xl md:text-3xl text-slate-950 mb-10 text-left border-l-4 border-blue-600 pl-4">
          {dict.fleet.fleetStatus}
        </h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {vesselsList.map((vessel, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white border border-slate-200 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-350 hover:border-blue-500/25 group"
            >
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="bg-slate-100 text-blue-600 p-1 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                      {renderVesselIcon()}
                    </div>
                    <span className="font-display font-extrabold text-xl text-slate-900">
                      {vessel.name}
                    </span>
                  </div>
                  <span className="bg-slate-100 border border-slate-200 text-slate-700 text-xs font-extrabold px-2.5 py-1 rounded-lg">
                    {vessel.built}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-y-4 gap-x-2 pt-2 text-xs md:text-sm font-semibold">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">{dict.fleet.typeLabel}</span>
                    <span className="text-slate-700 block mt-0.5">{vessel.type}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">{dict.fleet.tonnageLabel}</span>
                    <span className="text-slate-700 block mt-0.5">{vessel.dwt}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">{dict.fleet.flagLabel}</span>
                    <span className="text-slate-700 block mt-0.5">{vessel.flag}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">{dict.fleet.classLabel}</span>
                    <span className="text-slate-700 flex items-center gap-1 mt-0.5">
                      <Star className="w-4 h-4 text-blue-600 fill-blue-600" /> {dict.fleet.iacsLabel}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. Technical Standards Section */}
      <section className="py-20 bg-slate-100 text-slate-800 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-5"
            >
              <h2 className="font-display font-black text-2xl md:text-3xl tracking-tight text-slate-900 border-l-4 border-blue-600 pl-4">
                {dict.fleet.techDetails}
              </h2>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-semibold">
                {dict.fleet.standards.p1}
              </p>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-semibold">
                {dict.fleet.standards.p2}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border border-slate-200 p-8 rounded-2xl flex flex-col gap-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 text-blue-600 p-3 rounded-xl border border-blue-100 shrink-0">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 11l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse-slow" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm md:text-base mb-1">{dict.fleet.ismTitle}</h4>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                    {dict.fleet.ismDesc}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 text-blue-600 p-3 rounded-xl border border-blue-100 shrink-0">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0.1" />
                    <line x1="12" y1="12" x2="12" y2="5" stroke="currentColor" strokeLinecap="round" className="animate-spin-slow origin-[12px_12px]" />
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm md:text-base mb-1">{dict.fleet.realtimeTitle}</h4>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                    {dict.fleet.realtimeDesc}
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
