import React from "react";
import { Compass, Eye, ShieldAlert, Users, ShieldCheck } from "lucide-react";
import { getDictionary } from "../dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict.nav.about,
    description: dict.about.subtitle,
  };
}

export default async function AboutPage({
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
            {dict.common.brand} Corporate Profile
          </span>
          <h1 className="font-display font-black text-4xl md:text-5xl tracking-tight text-slate-900">
            {dict.about.title}
          </h1>
          <div className="w-12 h-1 bg-blue-600 rounded-full my-1" />
          <p className="text-slate-600 text-sm md:text-base max-w-xl leading-relaxed">
            {dict.about.subtitle}
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4">
            <div className="bg-blue-600/10 text-blue-600 p-3 rounded-xl self-start">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="font-display font-bold text-xl md:text-2xl text-slate-900">
              {dict.about.mission.title}
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              {dict.about.mission.desc}
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4">
            <div className="bg-blue-600/10 text-blue-600 p-3 rounded-xl self-start">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="font-display font-bold text-xl md:text-2xl text-slate-900">
              {dict.about.vision.title}
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              {dict.about.vision.desc}
            </p>
          </div>
        </div>
      </section>

      {/* Main Story & Philosophy */}
      <section className="py-12 bg-white border-y border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6 text-slate-700 leading-relaxed text-sm md:text-base">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-950 text-center mb-4">
            {dict.about.content.title}
          </h2>
          <p>{dict.about.content.p1}</p>
          <p>{dict.about.content.p2}</p>
          <p>{dict.about.content.p3}</p>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-950 text-center mb-12">
          {dict.about.values.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Value 1 */}
          <div className="bg-white border border-slate-200 p-8 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="text-blue-600 bg-blue-600/10 p-3 rounded-xl self-start">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg md:text-xl text-slate-900">
              {dict.about.values.item1.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              {dict.about.values.item1.desc}
            </p>
          </div>

          {/* Value 2 */}
          <div className="bg-white border border-slate-200 p-8 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="text-blue-600 bg-blue-600/10 p-3 rounded-xl self-start">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg md:text-xl text-slate-900">
              {dict.about.values.item2.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              {dict.about.values.item2.desc}
            </p>
          </div>

          {/* Value 3 */}
          <div className="bg-white border border-slate-200 p-8 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="text-blue-600 bg-blue-600/10 p-3 rounded-xl self-start">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg md:text-xl text-slate-900">
              {dict.about.values.item3.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              {dict.about.values.item3.desc}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
