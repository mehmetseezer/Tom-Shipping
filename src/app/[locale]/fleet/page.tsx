import React from "react";
import { Ship, Compass, ShieldCheck, Star } from "lucide-react";
import { getDictionary } from "../dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict.nav.fleet,
    description: dict.fleet.subtitle,
  };
}

export default async function FleetPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const vesselsList = [
    {
      name: dict.fleet.vessels.v1.name,
      type: dict.fleet.vessels.v1.type,
      dwt: dict.fleet.vessels.v1.dwt,
      built: dict.fleet.vessels.v1.built,
      flag: dict.fleet.vessels.v1.flag,
    },
    {
      name: dict.fleet.vessels.v2.name,
      type: dict.fleet.vessels.v2.type,
      dwt: dict.fleet.vessels.v2.dwt,
      built: dict.fleet.vessels.v2.built,
      flag: dict.fleet.vessels.v2.flag,
    },
    {
      name: dict.fleet.vessels.v3.name,
      type: dict.fleet.vessels.v3.type,
      dwt: dict.fleet.vessels.v3.dwt,
      built: dict.fleet.vessels.v3.built,
      flag: dict.fleet.vessels.v3.flag,
    },
    {
      name: dict.fleet.vessels.v4.name,
      type: dict.fleet.vessels.v4.type,
      dwt: dict.fleet.vessels.v4.dwt,
      built: dict.fleet.vessels.v4.built,
      flag: dict.fleet.vessels.v4.flag,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50">
      {/* Page Header (Light Theme) */}
      <section className="bg-slate-100 text-slate-800 py-16 md:py-20 relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center gap-3">
          <span className="text-blue-600 font-bold text-xs tracking-widest uppercase">
            {dict.common.brand} Marine Fleet
          </span>
          <h1 className="font-display font-black text-4xl md:text-5xl tracking-tight text-slate-900">
            {dict.fleet.title}
          </h1>
          <div className="w-12 h-1 bg-blue-600 rounded-full my-1" />
          <p className="text-slate-600 text-sm md:text-base max-w-xl leading-relaxed">
            {dict.fleet.subtitle}
          </p>
        </div>
      </section>

      {/* Intro Context */}
      <section className="py-12 bg-white border-b border-slate-200/60 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-600 text-base leading-relaxed">
            {dict.fleet.intro}
          </p>
        </div>
      </section>

      {/* Vessel Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-950 mb-8 text-left border-l-4 border-blue-600 pl-4">
          {dict.fleet.fleetStatus}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vesselsList.map((vessel, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:border-blue-500/20 group"
            >
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="bg-slate-100 text-blue-600 p-2 rounded-lg">
                      <Ship className="w-5 h-5" />
                    </div>
                    <span className="font-display font-extrabold text-xl text-slate-905">
                      {vessel.name}
                    </span>
                  </div>
                  <span className="bg-slate-100 text-slate-700 text-xs font-bold px-2.5 py-1 rounded">
                    {vessel.built}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-y-4 gap-x-2 pt-2 text-sm">
                  <div>
                    <span className="text-slate-400 block text-xs uppercase font-semibold">Type</span>
                    <span className="text-slate-800 font-semibold">{vessel.type}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs uppercase font-semibold">Tonnage</span>
                    <span className="text-slate-800 font-semibold">{vessel.dwt}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs uppercase font-semibold">Flag Registry</span>
                    <span className="text-slate-800 font-semibold">{vessel.flag}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs uppercase font-semibold">Class Rating</span>
                    <span className="text-slate-800 font-semibold flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-blue-500 fill-blue-500" /> IACS Compliant
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Standards Section (Light Gray Banner) */}
      <section className="py-20 bg-slate-100 text-slate-800 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-5">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight text-slate-900 border-l-4 border-blue-600 pl-4">
                {dict.fleet.techDetails}
              </h2>
              <p className="text-slate-650 text-sm md:text-base leading-relaxed">
                {dict.fleet.standards.p1}
              </p>
              <p className="text-slate-650 text-sm md:text-base leading-relaxed">
                {dict.fleet.standards.p2}
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-8 rounded-2xl flex flex-col gap-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 text-blue-600 p-2.5 rounded-xl">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">ISM & ISPS Certification</h4>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                    Vessels operate strictly under ISO-certified Safety Management Systems and security guidelines.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 text-blue-600 p-2.5 rounded-xl">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Real-time Performance Oversight</h4>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                    Vessel metrics are recorded continuously to control fuel metrics and track route schedules.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
