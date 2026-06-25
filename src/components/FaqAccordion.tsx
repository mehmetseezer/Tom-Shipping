"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  dict: {
    title: string;
    subtitle: string;
    supportCenter: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
  };
}

export default function FaqAccordion({ dict }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items: FaqItem[] = [
    { question: dict.q1, answer: dict.a1 },
    { question: dict.q2, answer: dict.a2 },
    { question: dict.q3, answer: dict.a3 },
    { question: dict.q4, answer: dict.a4 },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <span className="text-blue-600 font-bold text-xs tracking-widest uppercase flex items-center gap-1">
            <HelpCircle className="w-3.5 h-3.5" /> {dict.supportCenter}
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight">
            {dict.title}
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full" />
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            {dict.subtitle}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50 hover:bg-slate-50 transition-colors duration-300 shadow-xs"
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-extrabold text-base md:text-lg text-slate-900 group-hover:text-blue-600">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-100 bg-white">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
