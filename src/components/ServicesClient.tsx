"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Settings, Shield, Wrench, Package, Users, Anchor, Compass } from "lucide-react";
import { motion } from "framer-motion";

interface ServicesClientProps {
  dict: any;
  locale: string;
}

export default function ServicesClient({ dict, locale }: ServicesClientProps) {
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

  const servicesList = [
    {
      title: dict.services.items.shipManagement.title,
      desc: dict.services.items.shipManagement.desc,
    },
    {
      title: dict.services.items.marineOperations.title,
      desc: dict.services.items.marineOperations.desc,
    },
    {
      title: dict.services.items.maintenance.title,
      desc: dict.services.items.maintenance.desc,
    },
    {
      title: dict.services.items.logistics.title,
      desc: dict.services.items.logistics.desc,
    },
    {
      title: dict.services.items.crew.title,
      desc: dict.services.items.crew.desc,
    },
    {
      title: dict.services.items.chartering.title,
      desc: dict.services.items.chartering.desc,
    },
  ];

  const renderAnimatedIcon = (index: number) => {
    switch (index) {
      case 0:
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.1" />
            <g className="animate-spin-slow origin-center">
              <circle cx="12" cy="12" r="7" strokeDasharray="3 3" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </g>
          </svg>
        );
      case 1:
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0.1" />
            <path d="M7 16l3-6 4 4 4-8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="18" cy="6" r="2" fill="currentColor" className="animate-pulse-slow" />
            <circle cx="7" cy="16" r="2" fill="currentColor" />
          </svg>
        );
      case 2:
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77A6 6 0 0 1 12 12.5l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 5.7-2.77L11 10z" />
            <line x1="12" y1="12" x2="16" y2="8" stroke="currentColor" className="animate-spin-slow origin-[12px_12px]" />
          </svg>
        );
      case 3:
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" fillOpacity="0.1" />
            <path d="M7 8h10M7 12h10M7 16h5" strokeLinecap="round" />
            <g className="animate-pulse-slow">
              <path d="M15 16l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        );
      case 4:
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" fill="currentColor" fillOpacity="0.1" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            <circle cx="9" cy="7" r="1.5" fill="currentColor" className="animate-pulse-slow" />
          </svg>
        );
      case 5:
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
            <g className="animate-pulse-slow">
              <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 8h3.7V11.7" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-50">
      
      {/* 1. Page Header (Maersk Style with Image Background) */}
      <section className="relative w-full h-[220px] md:h-[280px] bg-slate-900 text-white flex items-center overflow-hidden border-b border-slate-850">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-header.png"
            alt={dict.services.title}
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
            {dict.services.title}
          </h1>
          <div className="w-12 h-1 bg-blue-600 rounded-full my-2.5" />
          <p className="text-slate-200 text-xs md:text-sm max-w-xl leading-relaxed font-semibold">
            {dict.services.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Intro Text & Custom Port Operations SVG Illustration */}
      <section className="py-16 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Text Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 flex flex-col gap-6"
            >
              <h2 className="font-display font-black text-2xl md:text-3xl text-slate-900 leading-tight">
                {locale === "tr" ? "Operasyonel Güç ve Güvenli Taşıma" : "Operational Strength & Safe Transit"}
              </h2>
              <p className="text-slate-550 text-xs md:text-sm leading-relaxed font-semibold">
                {dict.services.intro}
              </p>
              
              {/* Bullets with icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold text-slate-700 mt-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span>{locale === "tr" ? "Modern Kuru Yük Yönetimi" : "Modern Dry Bulk Management"}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span>{locale === "tr" ? "Kusursuz Klas Standartları" : "Impeccable Class Standards"}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span>{locale === "tr" ? "7/24 Kesintisiz Takip" : "24/7 Operations Monitoring"}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span>{locale === "tr" ? "Emniyetli Liman Operasyonları" : "Safe Port Control Operations"}</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Real Port Cargo Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-6 relative h-[350px] rounded-2xl overflow-hidden shadow-xl border border-slate-200"
            >
              <Image
                src="/images/services-port-ops.png"
                alt="Tom Shipping Port Cargo Operations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesList.map((service, index) => {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-350 flex flex-col gap-4 hover:-translate-y-1 group"
              >
                <div className="bg-slate-100 text-blue-600 p-3.5 rounded-xl self-start group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {renderAnimatedIcon(index)}
                </div>
                <h3 className="font-display font-extrabold text-slate-900 text-lg">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* 4. Call to Action */}
      <section className="py-20 bg-slate-900 text-white text-center border-t border-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <Anchor className="w-96 h-96 text-blue-900 absolute -right-24 -bottom-24 rotate-12" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6 relative z-10">
          <div className="bg-blue-600/10 text-blue-500 p-3 rounded-full animate-bounce">
            <Shield className="w-6 h-6" />
          </div>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white">
            {dict.home.cta.title}
          </h2>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl leading-relaxed font-semibold">
            {dict.fleet.intro}
          </p>
          <a
            href={`/${locale}/contact`}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-6 py-3.5 rounded-lg shadow-md transition-all duration-300"
          >
            {dict.home.cta.button}
          </a>
        </div>
      </section>

    </div>
  );
}
