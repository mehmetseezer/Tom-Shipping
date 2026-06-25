import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { getDictionary } from "./dictionaries";
import HomeClientWrapper from "@/components/HomeClientWrapper";
import FaqAccordion from "@/components/FaqAccordion";
import HeroCarousel from "@/components/HeroCarousel";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div className="w-full flex flex-col min-h-screen">
      
      {/* 1. HERO LOGISTICS CAROUSEL SECTION */}
      <HeroCarousel locale={locale} dict={dict.home.hero} common={dict.common} />

      {/* 2. MAIN HOME CLIENT WRAPPER (Floating Info Widget, Tabbed Services, Network Blocks, Industry Sectors) */}
      <HomeClientWrapper dict={dict} locale={locale} />

      {/* 3. FAQ ACCORDION SECTION */}
      <FaqAccordion dict={dict.faq} />

      {/* 4. CORPORATE CTA BANNER */}
      <section className="py-20 bg-slate-900 text-white border-t border-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-2xl md:text-4xl tracking-tight leading-tight">
            {dict.home.cta.title}
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl leading-relaxed">
            {dict.home.cta.subtitle}
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full my-1" />
          <Link
            href={`/${locale}/contact`}
            className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-6 py-3.5 rounded-lg text-sm shadow-md transition-all inline-block"
          >
            {dict.home.cta.button}
          </Link>
        </div>
      </section>

    </div>
  );
}
