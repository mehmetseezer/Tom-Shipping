import React from "react";
import Link from "next/link";
import { Anchor, Mail, MapPin, Phone, Clock } from "lucide-react";

interface FooterProps {
  locale: string;
  dict: {
    common: {
      brand: string;
      tagline: string;
      phone: string;
      email: string;
      address: string;
      hours: string;
      allRightsReserved: string;
      privacyPolicy: string;
      termsOfUse: string;
    };
    nav: {
      home: string;
      about: string;
      services: string;
      fleet: string;
      sustainability: string;
      careers: string;
      news: string;
      contact: string;
    };
    services: {
      items: {
        shipManagement: { title: string };
        marineOperations: { title: string };
        crew: { title: string };
        logistics: { title: string };
      };
    };
  };
}

export default function Footer({ locale, dict }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 text-slate-600 pt-16 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Company Profile */}
          <div className="flex flex-col gap-4">
            <Link href={`/${locale}`} className="flex items-center gap-2 text-slate-900">
              <Anchor className="w-6 h-6 text-blue-600" />
              <span className="font-display font-extrabold text-xl tracking-wider">
                {dict.common.brand}
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500">
              {dict.common.tagline}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-emerald-600 font-semibold">
                {dict.common.hours}
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-slate-900 font-display font-bold text-sm mb-4 tracking-wide uppercase">
              {dict.nav.about}
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href={`/${locale}`} className="hover:text-blue-600 transition-colors font-medium">
                  {dict.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="hover:text-blue-600 transition-colors font-medium">
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/fleet`} className="hover:text-blue-600 transition-colors font-medium">
                  {dict.nav.fleet}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/sustainability`} className="hover:text-blue-600 transition-colors font-medium">
                  {dict.nav.sustainability}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/careers`} className="hover:text-blue-600 transition-colors font-medium">
                  {dict.nav.careers}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/news`} className="hover:text-blue-600 transition-colors font-medium">
                  {dict.nav.news}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Maritime Services */}
          <div>
            <h3 className="text-slate-900 font-display font-bold text-sm mb-4 tracking-wide uppercase">
              {dict.nav.services}
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href={`/${locale}/services`} className="hover:text-blue-600 transition-colors font-medium">
                  {dict.services.items.shipManagement.title}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="hover:text-blue-600 transition-colors font-medium">
                  {dict.services.items.marineOperations.title}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="hover:text-blue-600 transition-colors font-medium">
                  {dict.services.items.crew.title}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="hover:text-blue-600 transition-colors font-medium">
                  {dict.services.items.logistics.title}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Coordinates */}
          <div className="flex flex-col gap-4">
            <h3 className="text-slate-900 font-display font-bold text-sm mb-4 tracking-wide uppercase">
              {dict.nav.contact}
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="font-medium">{dict.common.address}</span>
              </div>
              <a
                href={`tel:${dict.common.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2.5 hover:text-blue-600 transition-colors font-medium"
              >
                <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                <span>{dict.common.phone}</span>
              </a>
              <a
                href={`mailto:${dict.common.email}`}
                className="flex items-center gap-2.5 hover:text-blue-600 transition-colors font-medium"
              >
                <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="break-all">{dict.common.email}</span>
              </a>
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="font-medium">{dict.common.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <p>
            &copy; {currentYear} {dict.common.brand}. {dict.common.allRightsReserved}
          </p>
          <div className="flex gap-6">
            <span className="hover:text-blue-600 cursor-pointer transition-colors">
              {dict.common.privacyPolicy}
            </span>
            <span className="hover:text-blue-600 cursor-pointer transition-colors">
              {dict.common.termsOfUse}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
