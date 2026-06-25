import React from "react";
import { Ship, Building, Briefcase } from "lucide-react";
import { getDictionary } from "../dictionaries";
import CareerForm from "@/components/CareerForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict.nav.careers,
    description: dict.careers.subtitle,
  };
}

export default async function CareersPage({
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
            {dict.common.brand} Opportunities
          </span>
          <h1 className="font-display font-black text-4xl md:text-5xl tracking-tight text-slate-900">
            {dict.careers.title}
          </h1>
          <div className="w-12 h-1 bg-blue-600 rounded-full my-1" />
          <p className="text-slate-650 text-sm md:text-base max-w-xl leading-relaxed">
            {dict.careers.subtitle}
          </p>
        </div>
      </section>

      {/* Main Career Cards & Form Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info Columns */}
          <div className="flex flex-col gap-8">
            {/* Sea-based Careers */}
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm flex gap-5">
              <div className="bg-slate-100 text-blue-600 p-3 h-fit rounded-xl shrink-0">
                <Ship className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-display font-bold text-lg md:text-xl text-slate-900">
                  {dict.careers.seaTitle}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {dict.careers.seaDesc}
                </p>
              </div>
            </div>

            {/* Shore-based Careers */}
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm flex gap-5">
              <div className="bg-slate-100 text-blue-600 p-3 h-fit rounded-xl shrink-0">
                <Building className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-display font-bold text-lg md:text-xl text-slate-900">
                  {dict.careers.shoreTitle}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {dict.careers.shoreDesc}
                </p>
              </div>
            </div>

            {/* General Callout (Light White block) */}
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm flex gap-5">
              <div className="bg-blue-650/10 text-blue-600 p-3 h-fit rounded-xl shrink-0">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-display font-bold text-lg text-slate-900 font-semibold">Tom Shipping Culture</h3>
                <p className="text-slate-550 text-xs md:text-sm leading-relaxed">
                  We invest heavily in ongoing crew safety courses, modern navigational simulators, and career paths that respect and reward operational diligence.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Career application Form */}
          <div>
            <CareerForm dict={dict.careers} common={dict.common} />
          </div>
        </div>
      </section>
    </div>
  );
}
