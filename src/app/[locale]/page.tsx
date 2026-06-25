import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, TrendingUp, Award, FileText, Anchor, Users, Compass, Shield } from "lucide-react";
import { getDictionary } from "./dictionaries";
import HeroCarousel from "@/components/HeroCarousel";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  // Statistics config
  const statsList = [
    { value: "12+", label: dict.home.stats.vessels, icon: Anchor },
    { value: "350+", label: dict.home.stats.crew, icon: Users },
    { value: "25+", label: dict.home.stats.experience, icon: Award },
    { value: "99%", label: dict.home.stats.satisfaction, icon: Shield },
  ];

  // Pillars config
  const pillarsList = [
    {
      title: dict.home.pillars.safety.title,
      desc: dict.home.pillars.safety.desc,
      icon: ShieldCheck,
    },
    {
      title: dict.home.pillars.commercial.title,
      desc: dict.home.pillars.commercial.desc,
      icon: TrendingUp,
    },
    {
      title: dict.home.pillars.excellence.title,
      desc: dict.home.pillars.excellence.desc,
      icon: Award,
    },
    {
      title: dict.home.pillars.governance.title,
      desc: dict.home.pillars.governance.desc,
      icon: FileText,
    },
  ];

  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* 1. Hero Carousel */}
      <HeroCarousel locale={locale} dict={dict.home.hero} common={dict.common} />

      {/* 2. Intro Section (Light Gray) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Info */}
            <div className="flex flex-col gap-5">
              <div className="inline-flex items-center gap-1.5 self-start bg-slate-200 text-slate-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 text-blue-650 animate-spin-slow" />
                {dict.home.intro.badge}
              </div>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate-900 leading-tight">
                {dict.home.intro.title}
              </h2>
              <div className="w-20 h-1 bg-blue-600 rounded-full" />
              <p className="text-slate-650 text-base md:text-lg leading-relaxed mt-2 font-medium">
                {dict.home.intro.p1}
              </p>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                {dict.home.intro.p2}
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <Link
                  href={`/${locale}/about`}
                  className="bg-slate-950 hover:bg-slate-855 text-white font-bold px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  {dict.nav.about}
                </Link>
                <Link
                  href={`/${locale}/services`}
                  className="border border-slate-300 hover:border-slate-800 text-slate-700 hover:text-slate-950 font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  {dict.nav.services}
                </Link>
              </div>
            </div>

            {/* Right: Picture Frame */}
            <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/ship-2.png"
                alt="Tom Shipping Vessel"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-w-768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-slate-955/30" />
              <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col gap-1 z-10">
                <span className="text-xs font-bold text-blue-300 tracking-widest uppercase">
                  Tom Shipping Operations
                </span>
                <span className="font-display font-bold text-lg md:text-xl">
                  {dict.common.tagline}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Pillars (Reverted to White Background) */}
      <section className="py-24 bg-white text-slate-800 relative border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
            <span className="text-blue-600 font-bold text-xs tracking-widest uppercase">
              {dict.common.brand} Core Standards
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight text-slate-900">
              {dict.home.pillars.title}
            </h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full" />
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              {dict.home.pillars.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillarsList.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-500/30 p-8 rounded-2xl transition-all duration-300 flex flex-col gap-4 shadow-sm hover:shadow-md group hover:-translate-y-1"
              >
                <div className="bg-blue-50 text-blue-600 p-3.5 rounded-xl self-start group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg md:text-xl text-slate-900">
                  {pillar.title}
                </h3>
                <p className="text-slate-550 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Statistics Dashboard (Light Theme layout) */}
      <section className="py-16 bg-slate-50 text-slate-800 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            {statsList.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 pt-6 lg:pt-0 lg:px-4">
                <stat.icon className="w-8 h-8 text-blue-600 mb-2 animate-pulse" />
                <span className="font-display font-black text-4xl md:text-5xl text-slate-900 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm font-semibold tracking-wider text-slate-500 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Corporate CTA Banner (Reverted to Light Slate Banner) */}
      <section className="py-24 bg-slate-100 text-slate-900 relative overflow-hidden border-t border-slate-200">
        <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-5 pointer-events-none hidden lg:block">
          <Anchor className="w-96 h-96 text-blue-650 absolute -right-20 -bottom-20 rotate-12" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight">
            {dict.home.cta.title}
          </h2>
          <p className="text-slate-650 text-base md:text-lg max-w-2xl leading-relaxed">
            {dict.home.cta.subtitle}
          </p>
          <div className="w-16 h-1 bg-blue-600 rounded-full my-2" />
          <Link
            href={`/${locale}/contact`}
            className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-8 py-4 rounded-xl shadow-xl hover:shadow-blue-500/20 active:translate-y-0.5 hover:-translate-y-0.5 transition-all duration-300 inline-block text-base md:text-lg"
          >
            {dict.home.cta.button}
          </Link>
        </div>
      </section>
    </div>
  );
}
