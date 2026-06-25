"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Ship,
  Compass,
  MapPin,
  Calendar,
  Layers,
  ShieldCheck,
  TrendingUp,
  Award,
  Users,
  Anchor,
  ArrowRight,
  Wheat,
  Flame,
  Wrench,
  Hammer,
  RotateCcw,
  Navigation,
  FileText,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface HomeClientWrapperProps {
  dict: any;
  locale: string;
}

export default function HomeClientWrapper({ dict, locale }: HomeClientWrapperProps) {
  // 1. Floating Widget state
  const [activeWidgetTab, setActiveWidgetTab] = useState<"fleet" | "services" | "office">("fleet");

  // 2. Services tab panel state
  const [activeServicesTab, setActiveServicesTab] = useState<"transport" | "management" | "safety">("transport");

  // 3. Dynamic Route Slider active index
  const [activeRouteIndex, setActiveRouteIndex] = useState(1);

  const routesList = [
    {
      category: locale === "tr" ? "OKYANUS AŞIRI" : "TRANS-OCEANIC",
      title: locale === "tr" ? "Okyanus Aşırı Rotalar" : "Trans-Oceanic Routes",
      description: locale === "tr" ? "Kıtalararası emniyetli kuru yük taşımacılığı." : "Bridging continents with reliable bulk transit.",
      btnText: locale === "tr" ? "Okyanus Rotalarını Keşfet" : "Explore Ocean Passage",
      image: "/images/ship-1.png",
      path: `/${locale}/fleet`
    },
    {
      category: locale === "tr" ? "AKDENİZ" : "MEDITERRANEAN",
      title: locale === "tr" ? "Akdeniz Rotaları" : "Mediterranean Routes",
      description: locale === "tr" ? "Güneydoğu Avrupa, Kuzey Afrika ve Orta Doğu limanları." : "Connecting Southern Europe, North Africa, and Levant ports.",
      btnText: locale === "tr" ? "Akdeniz Rotalarını Keşfet" : "Explore Mediterranean",
      image: "/images/ship-2.png",
      path: `/${locale}/fleet`
    },
    {
      category: locale === "tr" ? "KUZEY AVRUPA" : "NORTHERN EUROPE",
      title: locale === "tr" ? "Kuzey Avrupa Rotaları" : "Northern Europe Routes",
      description: locale === "tr" ? "Baltık Denizi ve Kuzey Denizi limanlarına güvenli taşıma." : "Secure dry cargo corridors to Baltic and North Sea ports.",
      btnText: locale === "tr" ? "Kuzey Avrupa'yı Keşfet" : "Explore Northern Europe",
      image: "/images/ship-3.png",
      path: `/${locale}/fleet`
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
  } as const;

  return (
    <div className="w-full flex flex-col">
      
      {/* ========================================================================= */}
      {/* 2. FLOATING INFO WIDGET (Overlaps the bottom of the hero banner) */}
      {/* ========================================================================= */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-30 -mt-20 md:-mt-24"
      >
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-slate-100">
          
          {/* Navigation Tabs - Responsive layout */}
          <div className="flex border-b border-slate-200 bg-slate-50/50">
            {/* Fleet Tab */}
            <button
              onClick={() => setActiveWidgetTab("fleet")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2.5 px-3 sm:px-6 py-3.5 sm:py-4.5 text-[11px] sm:text-xs md:text-sm font-bold border-b-2 transition-all cursor-pointer ${
                activeWidgetTab === "fleet"
                  ? "border-blue-600 text-slate-900 bg-white"
                  : "border-transparent text-slate-500 hover:text-slate-900"
              }`}
            >
              <Ship className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-blue-600 shrink-0" />
              <span>{dict.floatingWidgetInfo.fleetTab}</span>
            </button>

            {/* Services Tab */}
            <button
              onClick={() => setActiveWidgetTab("services")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2.5 px-3 sm:px-6 py-3.5 sm:py-4.5 text-[11px] sm:text-xs md:text-sm font-bold border-b-2 transition-all cursor-pointer ${
                activeWidgetTab === "services"
                  ? "border-blue-600 text-slate-900 bg-white"
                  : "border-transparent text-slate-500 hover:text-slate-900"
              }`}
            >
              <Layers className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-blue-600 shrink-0" />
              <span>{dict.floatingWidgetInfo.servicesTab}</span>
            </button>

            {/* Office Tab */}
            <button
              onClick={() => setActiveWidgetTab("office")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2.5 px-3 sm:px-6 py-3.5 sm:py-4.5 text-[11px] sm:text-xs md:text-sm font-bold border-b-2 transition-all cursor-pointer ${
                activeWidgetTab === "office"
                  ? "border-blue-600 text-slate-900 bg-white"
                  : "border-transparent text-slate-500 hover:text-slate-900"
              }`}
            >
              <MapPin className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-blue-600 shrink-0" />
              <span>{dict.floatingWidgetInfo.officeTab}</span>
            </button>
          </div>

          {/* Active Tab Panel */}
          <div className="p-6 md:p-8 bg-white min-h-[140px] flex items-center">
            {/* 1. Fleet Tab Active */}
            {activeWidgetTab === "fleet" && (
              <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6 animate-fade-in">
                <div className="max-w-2xl flex flex-col gap-2">
                  <h4 className="font-display font-extrabold text-slate-900 text-base flex items-center gap-2">
                    <Ship className="w-5 h-5 text-blue-600" />
                    {dict.floatingWidgetInfo.fleetTitle}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                    {dict.floatingWidgetInfo.fleetDesc}
                  </p>
                </div>
                <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-2 text-center">
                    <span className="font-display font-black text-xl text-blue-600 block">12+</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{dict.floatingWidgetInfo.fleetVessels}</span>
                  </div>
                  <Link
                    href={`/${locale}/fleet`}
                    className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-3 rounded-lg flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>{locale === "tr" ? "Filomuzu İnceleyin" : "Explore Our Fleet"}</span>
                    <ArrowRight className="w-4.5 h-4.5" />
                  </Link>
                </div>
              </div>
            )}

            {/* 2. Services Tab Active */}
            {activeWidgetTab === "services" && (
              <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6 animate-fade-in">
                <div className="max-w-2xl flex flex-col gap-2">
                  <h4 className="font-display font-extrabold text-slate-900 text-base flex items-center gap-2">
                    <Layers className="w-5 h-5 text-blue-600" />
                    {dict.floatingWidgetInfo.servicesTitle}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                    {dict.floatingWidgetInfo.servicesDesc}
                  </p>
                </div>
                <div className="shrink-0 flex items-stretch sm:items-center">
                  <Link
                    href={`/${locale}/services`}
                    className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-3.5 rounded-lg flex items-center justify-center gap-1.5 transition-all w-full"
                  >
                    <span>{locale === "tr" ? "Hizmet Detayları" : "Service Details"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}

            {/* 3. Office Tab Active */}
            {activeWidgetTab === "office" && (
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-semibold text-slate-600 animate-fade-in">
                <div className="flex gap-3.5 items-start bg-slate-50 border border-slate-200/60 p-4 rounded-xl">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-slate-800 mb-1">{dict.floatingWidgetInfo.officeTitle}</h4>
                    <p className="leading-relaxed">{dict.floatingWidgetInfo.officeAddress}</p>
                    <p className="mt-1 text-slate-400 font-medium">Üsküdar / İstanbul</p>
                  </div>
                </div>
                <div className="flex gap-3.5 items-start bg-slate-50 border border-slate-200/60 p-4 rounded-xl">
                  <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-slate-800 mb-1">{dict.floatingWidgetInfo.officeHours}</h4>
                    <p className="leading-relaxed">teknik@tomshipping.com.tr</p>
                    <p className="mt-1 text-slate-400 font-medium">{dict.common.phone}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.section>

      {/* ========================================================================= */}
      {/* 2.5 BRAND OVERVIEW & DELIVERABLES GRID (With SVG Animations) */}
      {/* ========================================================================= */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Corporate Intro */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              <span className="text-blue-600 font-bold text-xs tracking-widest uppercase">
                {dict.home.intro.badge}
              </span>
              <h2 className="font-display font-black text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
                {dict.home.intro.title}
              </h2>
              <div className="w-16 h-1 bg-blue-600 rounded-full" />
              <p className="text-slate-700 text-xs md:text-sm leading-relaxed font-semibold">
                {dict.home.intro.p1}
              </p>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                {dict.home.intro.p2}
              </p>
              <div className="mt-2">
                <Link
                  href={`/${locale}/about`}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-6 py-3.5 rounded-lg shadow-sm transition-all inline-block"
                >
                  {locale === "tr" ? "Hakkımızda Daha Fazlası" : "More About Us"}
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Animated Deliverables Cards */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="lg:col-span-7"
            >
              <h3 className="text-slate-400 font-bold text-[10px] tracking-wider uppercase mb-6 block">
                {dict.home.intro.deliverablesTitle}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* 1. Safety & Compliance Card */}
                <motion.div
                  variants={itemVariants}
                  className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group flex flex-col gap-4"
                >
                  <div className="text-blue-600 self-start p-1 bg-blue-50/50 rounded-xl">
                    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="animate-spin-slow opacity-30" />
                      <path d="M24 6L10 12V24C10 32.5 16 40 24 42.5C32 40 38 32.5 38 24V12L24 6Z" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                      <path d="M18 24L22 28L30 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse-slow" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-display font-extrabold text-slate-900 text-sm md:text-base">
                      {dict.home.intro.safetyTitle}
                    </h4>
                    <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
                      {dict.home.intro.safetyDesc}
                    </p>
                  </div>
                </motion.div>

                {/* 2. Optimized Commercial Performance Card */}
                <motion.div
                  variants={itemVariants}
                  className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group flex flex-col gap-4"
                >
                  <div className="text-blue-600 self-start p-1 bg-blue-50/50 rounded-xl">
                    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g className="animate-spin-slow" style={{ transformOrigin: "20px 28px" }}>
                        <circle cx="20" cy="28" r="8" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.08" />
                        {[...Array(8)].map((_, i) => (
                          <rect key={i} x="18" y="16" width="4" height="4" fill="currentColor" rx="1" style={{ transform: `rotate(${i * 45}deg)`, transformOrigin: "20px 28px" }} />
                        ))}
                      </g>
                      <g className="animate-spin-reverse-slow" style={{ transformOrigin: "32px 18px" }}>
                        <circle cx="32" cy="18" r="6" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
                        {[...Array(6)].map((_, i) => (
                          <rect key={i} x="30" y="9" width="4" height="3" fill="currentColor" rx="1" style={{ transform: `rotate(${i * 60 + 30}deg)`, transformOrigin: "32px 18px" }} />
                        ))}
                      </g>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-display font-extrabold text-slate-900 text-sm md:text-base">
                      {dict.home.intro.commercialTitle}
                    </h4>
                    <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
                      {dict.home.intro.commercialDesc}
                    </p>
                  </div>
                </motion.div>

                {/* 3. Operational Excellence Card */}
                <motion.div
                  variants={itemVariants}
                  className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group flex flex-col gap-4"
                >
                  <div className="text-blue-600 self-start p-1 bg-blue-50/50 rounded-xl">
                    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.08" />
                      {[...Array(12)].map((_, i) => (
                        <line key={i} x1="24" y1="6" x2="24" y2="8" stroke="currentColor" strokeWidth="1.5" style={{ transform: `rotate(${i * 30}deg)`, transformOrigin: "24px 24px" }} />
                      ))}
                      <g className="animate-spin-slow" style={{ transformOrigin: "24px 24px" }}>
                        <path d="M24 10L28 24H20L24 10Z" fill="currentColor" />
                        <path d="M24 38L20 24H28L24 38Z" fill="currentColor" className="opacity-40" />
                        <circle cx="24" cy="24" r="2" fill="white" stroke="currentColor" strokeWidth="1.5" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-display font-extrabold text-slate-900 text-sm md:text-base">
                      {dict.home.intro.excellenceTitle}
                    </h4>
                    <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
                      {dict.home.intro.excellenceDesc}
                    </p>
                  </div>
                </motion.div>

                {/* 4. Transparent Governance Card */}
                <motion.div
                  variants={itemVariants}
                  className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group flex flex-col gap-4"
                >
                  <div className="text-blue-600 self-start p-1 bg-blue-50/50 rounded-xl overflow-visible">
                    <svg className="w-12 h-12 overflow-visible" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g className="animate-anchor-sway">
                        <circle cx="24" cy="10" r="3" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.08" />
                        <line x1="24" y1="13" x2="24" y2="34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        <line x1="16" y1="18" x2="32" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M12 28C12 36 17 38 24 38C31 38 36 36 36 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
                        <path d="M10 29L12 26L15 29" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M38 29L36 26L33 29" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-display font-extrabold text-slate-900 text-sm md:text-base">
                      {dict.home.intro.governanceTitle}
                    </h4>
                    <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
                      {dict.home.intro.governanceDesc}
                    </p>
                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. OCEAN TRANSPORT SERVICES & SOLUTIONS TAB PANEL (Maersk Layout style) */}
      {/* ========================================================================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-24 bg-white border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center gap-3">
            <span className="text-blue-600 font-bold text-xs tracking-widest uppercase">
              {locale === "tr" ? "UZMAN ÇÖZÜMLER" : "EXPERT SOLUTIONS"}
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight">
              {dict.transportSolutions.title}
            </h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full" />
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed max-w-2xl font-medium">
              {dict.transportSolutions.subtitle}
            </p>
          </motion.div>

          {/* Solutions Tab Toggle */}
          <motion.div variants={itemVariants} className="flex justify-center mb-10">
            <div className="bg-slate-100 border border-slate-200 p-1 rounded-xl flex gap-1">
              {/* Transport Tab */}
              <button
                onClick={() => setActiveServicesTab("transport")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all cursor-pointer ${
                  activeServicesTab === "transport"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Ship className="w-4 h-4" />
                {dict.transportSolutions.tabTransport}
              </button>

              {/* Ship Management Tab */}
              <button
                onClick={() => setActiveServicesTab("management")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all cursor-pointer ${
                  activeServicesTab === "management"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Compass className="w-4 h-4" />
                {dict.transportSolutions.tabManagement}
              </button>

              {/* Safety & Compliance Tab */}
              <button
                onClick={() => setActiveServicesTab("safety")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all cursor-pointer ${
                  activeServicesTab === "safety"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                {dict.transportSolutions.tabSafety}
              </button>
            </div>
          </motion.div>

          {/* Active Services Cards (Grid) */}
          <div className="w-full">
            {activeServicesTab === "transport" && (
              <motion.div
                initial="hidden"
                animate="show"
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {/* Spot Card */}
                <motion.div variants={itemVariants} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col justify-between group hover:border-blue-600/30 transition-all shadow-sm">
                  <div className="flex flex-col gap-4">
                    <div className="p-3 bg-white text-blue-600 border border-slate-200/80 rounded-xl self-start group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Anchor className="w-6 h-6" />
                    </div>
                    <h4 className="font-display font-extrabold text-slate-900 text-lg">
                      {dict.transportSolutions.cardSpotTitle}
                    </h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                      {dict.transportSolutions.cardSpotDesc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-slate-200/60">
                    <Link href={`/${locale}/services`} className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group-hover:gap-1.5 transition-all">
                      <span>{dict.common.learnMore}</span>
                      <ArrowRight className="w-4.5 h-4.5" />
                    </Link>
                  </div>
                </motion.div>

                {/* Contract Card */}
                <motion.div variants={itemVariants} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col justify-between group hover:border-blue-600/30 transition-all shadow-sm">
                  <div className="flex flex-col gap-4">
                    <div className="p-3 bg-white text-blue-600 border border-slate-200/80 rounded-xl self-start group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <FileText className="w-6 h-6" />
                    </div>
                    <h4 className="font-display font-extrabold text-slate-900 text-lg">
                      {dict.transportSolutions.cardContractTitle}
                    </h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                      {dict.transportSolutions.cardContractDesc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-slate-200/60">
                    <Link href={`/${locale}/services`} className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group-hover:gap-1.5 transition-all">
                      <span>{dict.common.learnMore}</span>
                      <ArrowRight className="w-4.5 h-4.5" />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {activeServicesTab === "management" && (
              <motion.div
                initial="hidden"
                animate="show"
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {/* Tech Management Card */}
                <motion.div variants={itemVariants} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col justify-between group hover:border-blue-600/30 transition-all shadow-sm">
                  <div className="flex flex-col gap-4">
                    <div className="p-3 bg-white text-blue-600 border border-slate-200/80 rounded-xl self-start group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Wrench className="w-6 h-6" />
                    </div>
                    <h4 className="font-display font-extrabold text-slate-900 text-lg">
                      {dict.transportSolutions.cardTechTitle}
                    </h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                      {dict.transportSolutions.cardTechDesc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-slate-200/60">
                    <Link href={`/${locale}/services`} className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group-hover:gap-1.5 transition-all">
                      <span>{dict.common.learnMore}</span>
                      <ArrowRight className="w-4.5 h-4.5" />
                    </Link>
                  </div>
                </motion.div>

                {/* Crew Management Card */}
                <motion.div variants={itemVariants} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col justify-between group hover:border-blue-600/30 transition-all shadow-sm">
                  <div className="flex flex-col gap-4">
                    <div className="p-3 bg-white text-blue-600 border border-slate-200/80 rounded-xl self-start group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Users className="w-6 h-6" />
                    </div>
                    <h4 className="font-display font-extrabold text-slate-900 text-lg">
                      {dict.transportSolutions.cardCrewTitle}
                    </h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                      {dict.transportSolutions.cardCrewDesc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-slate-200/60">
                    <Link href={`/${locale}/services`} className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group-hover:gap-1.5 transition-all">
                      <span>{dict.common.learnMore}</span>
                      <ArrowRight className="w-4.5 h-4.5" />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {activeServicesTab === "safety" && (
              <motion.div
                initial="hidden"
                animate="show"
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {/* HSEQ Card */}
                <motion.div variants={itemVariants} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col justify-between group hover:border-blue-600/30 transition-all shadow-sm">
                  <div className="flex flex-col gap-4">
                    <div className="p-3 bg-white text-blue-600 border border-slate-200/80 rounded-xl self-start group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h4 className="font-display font-extrabold text-slate-900 text-lg">
                      {dict.transportSolutions.cardSafetyTitleShort}
                    </h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                      {dict.transportSolutions.cardSafetyDesc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-slate-200/60">
                    <Link href={`/${locale}/sustainability`} className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group-hover:gap-1.5 transition-all">
                      <span>{dict.common.learnMore}</span>
                      <ArrowRight className="w-4.5 h-4.5" />
                    </Link>
                  </div>
                </motion.div>

                {/* Decarbonization Card */}
                <motion.div variants={itemVariants} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col justify-between group hover:border-blue-600/30 transition-all shadow-sm">
                  <div className="flex flex-col gap-4">
                    <div className="p-3 bg-white text-blue-600 border border-slate-200/80 rounded-xl self-start group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <h4 className="font-display font-extrabold text-slate-900 text-lg">
                      {dict.transportSolutions.cardDecarbTitle}
                    </h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                      {dict.transportSolutions.cardDecarbDesc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-slate-200/60">
                    <Link href={`/${locale}/sustainability`} className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group-hover:gap-1.5 transition-all">
                      <span>{dict.common.learnMore}</span>
                      <ArrowRight className="w-4.5 h-4.5" />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>

        </div>
      </motion.section>

      {/* ========================================================================= */}
      {/* 4. CORPORATE NETWORK SEGMENTS (Maersk Alternating Grid style) */}
      {/* ========================================================================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-20 bg-slate-50/60 border-b border-slate-200/60"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
          
          {/* Segment 1: Network */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Info */}
            <div className="flex flex-col gap-5">
              <h3 className="font-display font-black text-2xl md:text-3xl lg:text-4xl text-slate-900 leading-tight">
                {dict.corporateNetwork.networkTitle}
              </h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold">
                {dict.corporateNetwork.networkDesc}
              </p>
              <div className="mt-3">
                <Link
                  href={`/${locale}/about`}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-6 py-3 rounded-lg shadow-sm transition-all"
                >
                  {dict.corporateNetwork.networkBtn}
                </Link>
              </div>
            </div>
            {/* Right: Picture Frame */}
            <div className="relative w-full h-[260px] md:h-[350px] rounded-2xl overflow-hidden shadow-xl border border-slate-200/60">
              <Image
                src="/images/ship-2.png"
                alt="Tom Shipping Vessel Network"
                fill
                className="object-cover"
                sizes="(max-w-768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Segment 2: Environmental Compliance */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Picture Frame (reversed order on large screens) */}
            <div className="relative w-full h-[260px] md:h-[350px] rounded-2xl overflow-hidden shadow-xl border border-slate-200/60 order-2 lg:order-1">
              <Image
                src="/images/ship-3.png"
                alt="Maritime Environmental Management"
                fill
                className="object-cover"
                sizes="(max-w-768px) 100vw, 50vw"
              />
            </div>
            {/* Right: Info */}
            <div className="flex flex-col gap-5 order-1 lg:order-2">
              <h3 className="font-display font-black text-2xl md:text-3xl lg:text-4xl text-slate-900 leading-tight">
                {dict.corporateNetwork.trendTitle}
              </h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold">
                {dict.corporateNetwork.trendDesc}
              </p>
              <div className="mt-3">
                <Link
                  href={`/${locale}/sustainability`}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-6 py-3 rounded-lg shadow-sm transition-all"
                >
                  {dict.corporateNetwork.trendBtn}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ========================================================================= */}
      {/* 4B. DYNAMIC GLOBAL ROUTE CAROUSEL (Mockup Destination Slider) */}
      {/* ========================================================================= */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <span className="text-blue-600 font-bold text-xs tracking-widest uppercase">
            {locale === "tr" ? "ROTALARIMIZ" : "DESTINATIONS"}
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight mt-2">
            {locale === "tr" ? "Küresel Erişim Gücü" : "A world of operational transit"}
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full my-3" />
          <p className="text-slate-550 text-xs md:text-sm max-w-3xl leading-relaxed mb-12">
            {locale === "tr"
              ? "Tom Shipping, uluslararası deniz taşımacılığında güvenli ve verimli rotalarla küresel ticareti birbirine bağlar. Akdeniz'den Kuzey Avrupa'ya ve okyanus ötesi limanlara kadar geniş bir coğrafyada kuru yük lojistiği sunuyoruz."
              : "Tom Shipping connects global trade lanes through secure and efficient routes. We operate dry bulk vessel fleets crossing the Mediterranean, Northern Europe, and trans-oceanic pathways safely."}
          </p>

          {/* Cards slider container */}
          <div className="relative flex flex-col md:flex-row items-center gap-6 justify-center mt-8">
            {routesList.map((route, index) => {
              const isActive = activeRouteIndex === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveRouteIndex(index)}
                  className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 shadow-md border ${
                    isActive
                      ? "w-full md:w-[48%] h-[280px] md:h-[350px] border-blue-500 scale-100 z-20 opacity-100"
                      : "w-[85%] md:w-[23%] h-[220px] md:h-[290px] border-slate-200 scale-95 z-10 opacity-55 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={route.image}
                    alt={route.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-slate-950/65" />
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                    <span className="text-blue-400 font-bold text-[10px] uppercase tracking-wider">
                      {route.category}
                    </span>
                    
                    <div className="flex flex-col gap-2">
                      <h3 className={`font-display font-extrabold text-white leading-tight transition-all ${isActive ? "text-lg md:text-2xl" : "text-sm md:text-base"}`}>
                        {route.title}
                      </h3>
                      {isActive && (
                        <p className="text-slate-300 text-xs font-semibold leading-relaxed animate-fade-in line-clamp-2 md:line-clamp-none">
                          {route.description}
                        </p>
                      )}
                    </div>

                    {isActive && (
                      <div className="self-end mt-4 animate-fade-in">
                        <Link
                          href={route.path}
                          className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-[10px] md:text-xs px-4 py-2.5 rounded-lg shadow-md transition-all inline-block uppercase tracking-wider hover:-translate-y-0.5 active:translate-y-0"
                        >
                          {route.btnText}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slider controls footer */}
          <div className="flex justify-between items-center mt-12 border-t border-slate-200/80 pt-6">
            <Link
              href={`/${locale}/fleet`}
              className="text-blue-600 hover:text-blue-700 font-extrabold text-xs md:text-sm tracking-wide transition-colors flex items-center gap-1.5"
            >
              <span>{locale === "tr" ? "Tüm Rotaları Keşfet" : "Explore All Destinations"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                {routesList.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveRouteIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeRouteIndex === i ? "w-6 bg-blue-600" : "w-1.5 bg-slate-300 hover:bg-slate-450"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setActiveRouteIndex((prev) => (prev - 1 + routesList.length) % routesList.length)}
                  className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-pointer shadow-xs"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveRouteIndex((prev) => (prev + 1) % routesList.length)}
                  className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-pointer shadow-xs"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. INDUSTRY BULK SECTORS (Maersk Icons Slide style) */}
      {/* ========================================================================= */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-3">
            <span className="text-blue-600 font-bold text-xs tracking-widest uppercase">
              {locale === "tr" ? "TAŞINAN YÜKLER" : "CARGO TYPE"}
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight">
              {dict.industrySectors.title}
            </h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full" />
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
              {dict.industrySectors.subtitle}
            </p>
          </div>

          {/* Sectors Horizontal List */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            
            {/* 1. Grain */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow">
              <div className="p-4 bg-white text-blue-600 rounded-full border border-slate-150 shadow-sm">
                <Wheat className="w-6 h-6" />
              </div>
              <span className="font-display font-extrabold text-xs md:text-sm text-slate-800 uppercase tracking-wider">
                {dict.industrySectors.grain}
              </span>
            </div>

            {/* 2. Coal */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow">
              <div className="p-4 bg-white text-blue-600 rounded-full border border-slate-150 shadow-sm">
                <Flame className="w-6 h-6" />
              </div>
              <span className="font-display font-extrabold text-xs md:text-sm text-slate-800 uppercase tracking-wider">
                {dict.industrySectors.coal}
              </span>
            </div>

            {/* 3. Ore */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow">
              <div className="p-4 bg-white text-blue-600 rounded-full border border-slate-150 shadow-sm">
                <Hammer className="w-6 h-6" />
              </div>
              <span className="font-display font-extrabold text-xs md:text-sm text-slate-800 uppercase tracking-wider">
                {dict.industrySectors.ore}
              </span>
            </div>

            {/* 4. Fertilizer */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow">
              <div className="p-4 bg-white text-blue-600 rounded-full border border-slate-150 shadow-sm">
                <Compass className="w-6 h-6" />
              </div>
              <span className="font-display font-extrabold text-xs md:text-sm text-slate-800 uppercase tracking-wider">
                {dict.industrySectors.fertilizer}
              </span>
            </div>

            {/* 5. Steel */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow col-span-2 md:col-span-1">
              <div className="p-4 bg-white text-blue-600 rounded-full border border-slate-150 shadow-sm">
                <Wrench className="w-6 h-6" />
              </div>
              <span className="font-display font-extrabold text-xs md:text-sm text-slate-800 uppercase tracking-wider">
                {dict.industrySectors.steel}
              </span>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
