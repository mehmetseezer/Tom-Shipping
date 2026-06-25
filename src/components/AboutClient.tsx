"use client";

import React from "react";
import Image from "next/image";
import { Compass, Eye, ShieldAlert, Users, ShieldCheck, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface AboutClientProps {
  dict: any;
  locale: string;
}

export default function AboutClient({ dict, locale }: AboutClientProps) {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  } as const;

  return (
    <div className="w-full min-h-screen bg-slate-50">
      
      {/* 1. Page Header (Maersk Style with Image Background) */}
      <section className="relative w-full h-[220px] md:h-[280px] bg-slate-900 text-white flex items-center overflow-hidden border-b border-slate-850">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ship-2.png"
            alt={dict.about.title}
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
            {dict.about.title}
          </h1>
          <div className="w-12 h-1 bg-blue-600 rounded-full my-2.5" />
          <p className="text-slate-200 text-xs md:text-sm max-w-xl leading-relaxed font-semibold">
            {dict.about.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Mission & Vision Section (With scroll animations) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Mission Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-350 flex flex-col gap-4 group"
          >
            <div className="bg-blue-600/10 text-blue-600 p-3.5 rounded-xl self-start group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="font-display font-extrabold text-xl md:text-2xl text-slate-900">
              {dict.about.mission.title}
            </h2>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold">
              {dict.about.mission.desc}
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-350 flex flex-col gap-4 group"
          >
            <div className="bg-blue-600/10 text-blue-600 p-3.5 rounded-xl self-start group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="font-display font-extrabold text-xl md:text-2xl text-slate-900">
              {dict.about.vision.title}
            </h2>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold">
              {dict.about.vision.desc}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. Main Story & Philosophy (With SVG Illustration) */}
      <section className="py-20 bg-white border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Text Story & Visual Milestones Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col gap-8"
            >
              <div>
                <h2 className="font-display font-black text-2xl md:text-3xl text-slate-900 mb-3">
                  {dict.about.content.title}
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded-full mb-4" />
                <p className="text-slate-600 text-xs md:text-sm font-semibold leading-relaxed">
                  {dict.about.content.p1}
                </p>
              </div>

              {/* Vertical Milestones Timeline */}
              <div className="flex flex-col gap-6 relative pl-6 border-l-2 border-slate-200 ml-3">
                {/* Node 1 */}
                <div className="relative group">
                  {/* Timeline circle */}
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white group-hover:scale-125 transition-transform shadow-sm animate-pulse-slow" />
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-black text-blue-600 font-display">{dict.about.timeline.t1.year}</span>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">{dict.about.timeline.t1.title}</h4>
                    <p className="text-slate-500 text-[11px] md:text-xs font-medium">{dict.about.timeline.t1.desc}</p>
                  </div>
                </div>

                {/* Node 2 */}
                <div className="relative group">
                  {/* Timeline circle */}
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white group-hover:scale-125 transition-transform shadow-sm" />
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-black text-blue-600 font-display">{dict.about.timeline.t2.year}</span>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">{dict.about.timeline.t2.title}</h4>
                    <p className="text-slate-500 text-[11px] md:text-xs font-medium">{dict.about.timeline.t2.desc}</p>
                  </div>
                </div>

                {/* Node 3 */}
                <div className="relative group">
                  {/* Timeline circle */}
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white group-hover:scale-125 transition-transform shadow-sm" />
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-black text-blue-600 font-display">{dict.about.timeline.t3.year}</span>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">{dict.about.timeline.t3.title}</h4>
                    <p className="text-slate-500 text-[11px] md:text-xs font-medium">{dict.about.timeline.t3.desc}</p>
                  </div>
                </div>

                {/* Node 4 */}
                <div className="relative group">
                  {/* Timeline circle */}
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white group-hover:scale-125 transition-transform shadow-sm" />
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-black text-blue-600 font-display">{dict.about.timeline.t4.year}</span>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">{dict.about.timeline.t4.title}</h4>
                    <p className="text-slate-500 text-[11px] md:text-xs font-medium">{dict.about.timeline.t4.desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Real Corporate Vessel Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative h-[320px] rounded-2xl overflow-hidden shadow-xl border border-slate-200"
            >
              <Image
                src="/images/about-cargo-ship.png"
                alt="Tom Shipping Vessel"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Corporate Values (With hover animations) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-black text-2xl md:text-3xl text-slate-950 text-center mb-16">
          {dict.about.values.title}
        </h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Value 1 */}
          <motion.div
            variants={itemVariants}
            className="bg-white border border-slate-200 p-8 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="text-blue-600 bg-blue-600/10 p-3.5 rounded-xl self-start group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-display font-extrabold text-lg md:text-xl text-slate-900">
              {dict.about.values.item1.title}
            </h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold">
              {dict.about.values.item1.desc}
            </p>
          </motion.div>

          {/* Value 2 */}
          <motion.div
            variants={itemVariants}
            className="bg-white border border-slate-200 p-8 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="text-blue-600 bg-blue-600/10 p-3.5 rounded-xl self-start group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display font-extrabold text-lg md:text-xl text-slate-900">
              {dict.about.values.item2.title}
            </h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold">
              {dict.about.values.item2.desc}
            </p>
          </motion.div>

          {/* Value 3 */}
          <motion.div
            variants={itemVariants}
            className="bg-white border border-slate-200 p-8 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="text-blue-600 bg-blue-600/10 p-3.5 rounded-xl self-start group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="font-display font-extrabold text-lg md:text-xl text-slate-900">
              {dict.about.values.item3.title}
            </h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold">
              {dict.about.values.item3.desc}
            </p>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
