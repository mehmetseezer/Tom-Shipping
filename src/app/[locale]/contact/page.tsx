import React from "react";
import { MapPin, Phone, Mail, Clock, ShieldCheck, Compass } from "lucide-react";
import { getDictionary } from "../dictionaries";
import ContactForm from "@/components/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict.nav.contact,
    description: dict.contact.subtitle,
  };
}

export default async function ContactPage({
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
            {dict.common.brand} Headquarters
          </span>
          <h1 className="font-display font-black text-4xl md:text-5xl tracking-tight text-slate-900">
            {dict.contact.title}
          </h1>
          <div className="w-12 h-1 bg-blue-600 rounded-full my-1" />
          <p className="text-slate-600 text-sm md:text-base max-w-xl leading-relaxed">
            {dict.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact info cards */}
          <div className="flex flex-col gap-8">
            <h2 className="font-display font-extrabold text-2xl text-slate-900 border-l-4 border-blue-600 pl-4">
              {dict.contact.infoTitle}
            </h2>

            {/* Coordinates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Address */}
              <div className="bg-white border border-slate-200 p-6 rounded-2xl flex flex-col gap-3 shadow-sm">
                <MapPin className="w-6 h-6 text-blue-600" />
                <h3 className="font-bold text-slate-900 text-sm md:text-base">{dict.contact.addressTitle}</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{dict.common.address}</p>
              </div>

              {/* Phone */}
              <div className="bg-white border border-slate-200 p-6 rounded-2xl flex flex-col gap-3 shadow-sm">
                <Phone className="w-6 h-6 text-blue-600" />
                <h3 className="font-bold text-slate-900 text-sm md:text-base">{dict.contact.phoneTitle}</h3>
                <a
                  href={`tel:${dict.common.phone.replace(/\s+/g, "")}`}
                  className="text-slate-500 text-xs md:text-sm hover:text-blue-600 transition-colors"
                >
                  {dict.common.phone}
                </a>
              </div>

              {/* Email */}
              <div className="bg-white border border-slate-200 p-6 rounded-2xl flex flex-col gap-3 shadow-sm">
                <Mail className="w-6 h-6 text-blue-600" />
                <h3 className="font-bold text-slate-900 text-sm md:text-base">{dict.contact.emailTitle}</h3>
                <a
                  href={`mailto:${dict.common.email}`}
                  className="text-slate-500 text-xs md:text-sm hover:text-blue-600 transition-colors break-all"
                >
                  {dict.common.email}
                </a>
              </div>

              {/* Business Hours */}
              <div className="bg-white border border-slate-200 p-6 rounded-2xl flex flex-col gap-3 shadow-sm">
                <Clock className="w-6 h-6 text-blue-600" />
                <h3 className="font-bold text-slate-900 text-sm md:text-base">{dict.contact.hoursTitle}</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{dict.common.hours}</p>
              </div>
            </div>

            {/* Mock Navigational Map Representation (Solid Navy Blue background) */}
            <div className="bg-primary text-white p-8 rounded-3xl relative overflow-hidden shadow-xl h-[280px] flex flex-col justify-between">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
              <div className="absolute right-6 top-6 animate-pulse">
                <div className="w-3.5 h-3.5 rounded-full bg-blue-400 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                </div>
              </div>
              <div className="relative z-10 flex flex-col gap-2">
                <span className="text-blue-300 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <Compass className="w-4 h-4 animate-spin-slow" /> Coordinates tracking
                </span>
                <span className="font-display font-extrabold text-lg md:text-xl">
                  41.0264° N, 29.0150° E
                </span>
                <span className="text-slate-300 text-xs uppercase font-semibold">
                  Üsküdar / İstanbul, Turkey
                </span>
              </div>
              <div className="relative z-10 pt-4 border-t border-primary-light flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-450 shrink-0" />
                <span>Primary Operational Station and Fleet Control Center</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form container (Light white shadow card) */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200">
            <h2 className="font-display font-extrabold text-2xl text-slate-900 mb-6 border-b border-slate-100 pb-4">
              {dict.contact.formTitle}
            </h2>
            <ContactForm dict={dict.contact} common={dict.common} />
          </div>
        </div>
      </section>
    </div>
  );
}
