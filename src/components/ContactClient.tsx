"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ShieldCheck, Compass } from "lucide-react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

interface ContactClientProps {
  dict: any;
  locale: string;
  common: any;
}

export default function ContactClient({ dict, locale, common }: ContactClientProps) {
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
    <div className="w-full min-h-screen bg-slate-50">
      
      {/* 1. Page Header (Maersk Style with Image Background) */}
      <section className="relative w-full h-[220px] md:h-[280px] bg-slate-900 text-white flex items-center overflow-hidden border-b border-slate-850">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-header.png"
            alt={dict.contact.title}
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
            {dict.contact.title}
          </h1>
          <div className="w-12 h-1 bg-blue-600 rounded-full my-2.5" />
          <p className="text-slate-250 text-xs md:text-sm max-w-xl leading-relaxed font-semibold">
            {dict.contact.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Main Grid: Info + Form */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact info cards */}
          <div className="flex flex-col gap-8">
            <h2 className="font-display font-black text-2xl text-slate-900 border-l-4 border-blue-600 pl-4">
              {dict.contact.infoTitle}
            </h2>

            {/* Coordinates Grid (Stagger animate) */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Address */}
              <motion.div
                variants={itemVariants}
                className="bg-white border border-slate-200 p-6 rounded-2xl flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow group"
              >
                <MapPin className="w-6 h-6 text-blue-600 group-hover:scale-105 transition-transform" />
                <h3 className="font-extrabold text-slate-900 text-sm md:text-base">{dict.contact.addressTitle}</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold">{common.address}</p>
              </motion.div>

              {/* Phone */}
              <motion.div
                variants={itemVariants}
                className="bg-white border border-slate-200 p-6 rounded-2xl flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow group"
              >
                <Phone className="w-6 h-6 text-blue-600 group-hover:scale-105 transition-transform" />
                <h3 className="font-extrabold text-slate-900 text-sm md:text-base">{dict.contact.phoneTitle}</h3>
                <a
                  href={`tel:${common.phone.replace(/\s+/g, "")}`}
                  className="text-slate-500 text-xs md:text-sm hover:text-blue-600 transition-colors font-semibold"
                >
                  {common.phone}
                </a>
              </motion.div>

              {/* Email */}
              <motion.div
                variants={itemVariants}
                className="bg-white border border-slate-200 p-6 rounded-2xl flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow group"
              >
                <Mail className="w-6 h-6 text-blue-600 group-hover:scale-105 transition-transform" />
                <h3 className="font-extrabold text-slate-900 text-sm md:text-base">{dict.contact.emailTitle}</h3>
                <a
                  href={`mailto:${common.email}`}
                  className="text-slate-500 text-xs md:text-sm hover:text-blue-600 transition-colors break-all font-semibold"
                >
                  {common.email}
                </a>
              </motion.div>

              {/* Business Hours */}
              <motion.div
                variants={itemVariants}
                className="bg-white border border-slate-200 p-6 rounded-2xl flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow group"
              >
                <Clock className="w-6 h-6 text-blue-600 group-hover:scale-105 transition-transform" />
                <h3 className="font-extrabold text-slate-900 text-sm md:text-base">{dict.contact.hoursTitle}</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold">{common.hours}</p>
              </motion.div>
            </motion.div>

            {/* Mock Navigational Map Representation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden shadow-xl h-[280px] flex flex-col justify-between border border-slate-850"
            >
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
              
              <div className="absolute right-6 top-6 animate-pulse">
                <div className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />
                </div>
              </div>

              <div className="relative z-10 flex flex-col gap-2">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <Compass className="w-4 h-4 animate-spin-slow" /> {dict.contact.coordinatesTitle}
                </span>
                <span className="font-display font-black text-xl md:text-2xl text-white">
                  41.0264° N, 29.0150° E
                </span>
                <span className="text-slate-300 text-xs uppercase font-bold tracking-wider">
                  Üsküdar / İstanbul, {locale === "tr" ? "Türkiye" : "Turkey"}
                </span>
              </div>

              <div className="relative z-10 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-300 font-semibold">
                <ShieldCheck className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                <span>{dict.contact.stationLabel}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact form container (Animate from right side) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200"
          >
            <h2 className="font-display font-black text-2xl text-slate-900 mb-6 border-b border-slate-100 pb-4">
              {dict.contact.formTitle}
            </h2>
            <ContactForm dict={dict.contact} common={common} />
          </motion.div>

        </div>
      </section>

    </div>
  );
}
