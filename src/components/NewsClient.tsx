"use client";

import React from "react";
import Image from "next/image";
import { Calendar, Anchor, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface NewsClientProps {
  dict: any;
  locale: string;
}

export default function NewsClient({ dict, locale }: NewsClientProps) {
  const newsItems = [
    {
      title: dict.news.items.n1.title,
      date: dict.news.items.n1.date,
      summary: dict.news.items.n1.summary,
    },
    {
      title: dict.news.items.n2.title,
      date: dict.news.items.n2.date,
      summary: dict.news.items.n2.summary,
    },
    {
      title: dict.news.items.n3.title,
      date: dict.news.items.n3.date,
      summary: dict.news.items.n3.summary,
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
  } as const;

  return (
    <div className="w-full min-h-screen bg-slate-50">
      
      {/* 1. Page Header (Maersk Style with Image Background) */}
      <section className="relative w-full h-[220px] md:h-[280px] bg-slate-900 text-white flex items-center overflow-hidden border-b border-slate-850">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/news-header.png"
            alt={dict.news.title}
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
            {dict.news.title}
          </h1>
          <div className="w-12 h-1 bg-blue-600 rounded-full my-2.5" />
          <p className="text-slate-250 text-xs md:text-sm max-w-xl leading-relaxed font-semibold">
            {dict.news.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Articles Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {newsItems.map((item, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-350 flex flex-col justify-between hover:border-blue-500/20 group hover:-translate-y-1"
            >
              <div className="p-6 md:p-8 flex flex-col gap-4">
                {/* Date & Icon */}
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span>{item.date}</span>
                </div>
                {/* Title */}
                <h3 className="font-display font-extrabold text-lg md:text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                {/* Summary */}
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold">
                  {item.summary}
                </p>
              </div>

              {/* Bottom Row */}
              <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-slate-800 font-bold text-xs flex items-center gap-1 group-hover:text-blue-600 transition-colors cursor-pointer">
                  {dict.common.readMore} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <Anchor className="w-4 h-4 text-slate-200 group-hover:text-blue-500/20 transition-colors" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

    </div>
  );
}
