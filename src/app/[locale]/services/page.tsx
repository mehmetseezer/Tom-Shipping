import React from "react";
import { Settings, Shield, Wrench, Package, Users, Anchor, Compass } from "lucide-react";
import { getDictionary } from "../dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict.nav.services,
    description: dict.services.subtitle,
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  // Group services with their corresponding icons
  const servicesList = [
    {
      title: dict.services.items.shipManagement.title,
      desc: dict.services.items.shipManagement.desc,
      icon: Settings,
    },
    {
      title: dict.services.items.marineOperations.title,
      desc: dict.services.items.marineOperations.desc,
      icon: Compass,
    },
    {
      title: dict.services.items.maintenance.title,
      desc: dict.services.items.maintenance.desc,
      icon: Wrench,
    },
    {
      title: dict.services.items.logistics.title,
      desc: dict.services.items.logistics.desc,
      icon: Package,
    },
    {
      title: dict.services.items.crew.title,
      desc: dict.services.items.crew.desc,
      icon: Users,
    },
    {
      title: dict.services.items.chartering.title,
      desc: dict.services.items.chartering.desc,
      icon: Anchor,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50">
      {/* Page Header (Light Theme) */}
      <section className="bg-slate-100 text-slate-800 py-16 md:py-20 relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center gap-3">
          <span className="text-blue-600 font-bold text-xs tracking-widest uppercase">
            {dict.common.brand} Maritime Offerings
          </span>
          <h1 className="font-display font-black text-4xl md:text-5xl tracking-tight text-slate-900">
            {dict.services.title}
          </h1>
          <div className="w-12 h-1 bg-blue-600 rounded-full my-1" />
          <p className="text-slate-600 text-sm md:text-base max-w-xl leading-relaxed">
            {dict.services.subtitle}
          </p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-12 bg-white border-b border-slate-200/60 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
            {dict.services.intro}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 p-8 rounded-2xl hover:border-blue-500/30 hover:shadow-xl transition-all duration-300 flex flex-col gap-4 shadow-sm hover:-translate-y-1 group"
            >
              <div className="bg-slate-100 text-blue-600 p-3.5 rounded-xl self-start group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg md:text-xl text-slate-900">
                {service.title}
              </h3>
              <p className="text-slate-550 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action (Light Theme bg-slate-100) */}
      <section className="py-16 bg-slate-100 text-slate-900 text-center border-t border-slate-200 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6">
          <div className="bg-blue-600/10 text-blue-600 p-3 rounded-full animate-bounce">
            <Shield className="w-6 h-6" />
          </div>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-900">
            {dict.home.cta.title}
          </h2>
          <p className="text-slate-650 text-sm md:text-base max-w-xl leading-relaxed">
            {dict.fleet.intro}
          </p>
          <a
            href={`/${locale}/contact`}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            {dict.home.cta.button}
          </a>
        </div>
      </section>
    </div>
  );
}
