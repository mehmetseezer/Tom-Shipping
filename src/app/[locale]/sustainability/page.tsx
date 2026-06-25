import React from "react";
import { ShieldCheck, HeartPulse, Leaf, FileText } from "lucide-react";
import { getDictionary } from "../dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict.nav.sustainability,
    description: dict.sustainability.subtitle,
  };
}

export default async function SustainabilityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div className="w-full min-h-screen bg-slate-50">
      {/* Page Header (Light Theme) */}
      <section className="bg-slate-100 text-slate-800 py-16 md:py-20 relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center gap-3">
          <span className="text-blue-600 font-bold text-xs tracking-widest uppercase">
            {dict.common.brand} Eco & Safety Policies
          </span>
          <h1 className="font-display font-black text-4xl md:text-5xl tracking-tight text-slate-900">
            {dict.sustainability.title}
          </h1>
          <div className="w-12 h-1 bg-blue-600 rounded-full my-1" />
          <p className="text-slate-650 text-sm md:text-base max-w-xl leading-relaxed">
            {dict.sustainability.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HSEQ Card */}
        <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-sm mb-16 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-slate-100 text-blue-600 p-2.5 rounded-xl">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h2 className="font-display font-extrabold text-2xl text-slate-900">
              {dict.sustainability.hseq}
            </h2>
          </div>
          <div className="w-16 h-0.5 bg-blue-600 rounded-full" />
          <p className="text-slate-650 text-base leading-relaxed">
            {dict.home.intro.p1}
          </p>
        </div>

        {/* Dynamic Multi-column Segment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1: Safety */}
          <div className="bg-white border border-slate-200 p-8 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-50 text-blue-600 p-3 rounded-xl self-start">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg md:text-xl text-slate-900">
              {dict.sustainability.safetyFirst}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              {dict.sustainability.safetyFirstDesc}
            </p>
          </div>

          {/* Pillar 2: Environment */}
          <div className="bg-white border border-slate-200 p-8 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-50 text-blue-600 p-3 rounded-xl self-start">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg md:text-xl text-slate-900">
              {dict.sustainability.ecoTitle}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              {dict.sustainability.ecoDesc}
            </p>
          </div>

          {/* Pillar 3: Compliance */}
          <div className="bg-white border border-slate-200 p-8 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-50 text-blue-600 p-3 rounded-xl self-start">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg md:text-xl text-slate-900">
              {dict.sustainability.complianceTitle}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              {dict.sustainability.complianceDesc}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
