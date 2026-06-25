"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Globe, Menu, X, PhoneCall, ChevronDown, Mail } from "lucide-react";

interface HeaderProps {
  locale: string;
  dict: {
    home: string;
    corporate: string;
    about: string;
    services: string;
    fleet: string;
    sustainability: string;
    careers: string;
    news: string;
    contact: string;
  };
  common: {
    brand: string;
    phone: string;
    hours: string;
    email?: string;
  };
}

export default function Header({ locale, dict, common }: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  
  // Navigation states
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Dropdown states
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Scroll effect for styling checks
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleLanguage = (targetLang: string) => {
    if (locale === targetLang) return;
    const segments = pathname.split("/");
    segments[1] = targetLang;
    const newPathname = segments.join("/");
    router.push(newPathname);
    setIsOpen(false);
    setDropdownOpen(false);
  };

  const isActive = (path: string) => {
    if (path === `/${locale}`) {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const corporateItems = [
    { name: dict.about, path: `/${locale}/about` },
    { name: dict.fleet, path: `/${locale}/fleet` },
    { name: dict.sustainability, path: `/${locale}/sustainability` },
    { name: dict.careers, path: `/${locale}/careers` },
    { name: dict.news, path: `/${locale}/news` },
  ];

  const isCorporateActive = corporateItems.some((item) => pathname.startsWith(item.path));

  return (
    <>
      {/* 1. TOP UTILITY BAR (Two-tier Navigation Layout - Styled Maersk dark) */}
      <div className="bg-[#111827] text-white text-[11px] py-2.5 px-4 md:px-8 flex justify-between items-center border-b border-slate-800 z-50 relative font-semibold">
        <div className="flex items-center gap-5">
          <span className="text-white">{common.hours}</span>
          <span className="hidden md:inline-flex items-center gap-1.5 text-white">
            <Mail className="w-3.5 h-3.5 text-blue-500" />
            <span>teknik@tomshipping.com.tr</span>
          </span>
          <a
            href={`tel:${common.phone.replace(/\s+/g, "")}`}
            className="hidden sm:inline-flex items-center gap-1.5 text-white hover:text-blue-400 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-blue-500" />
            <span>{common.phone}</span>
          </a>
        </div>
        
        <div className="flex items-center gap-4 ml-auto">
          {/* Language Switcher */}
          <div className="flex items-center gap-1">
            <Globe className="w-3.5 h-3.5 text-slate-400 mr-0.5" />
            <button
              onClick={() => toggleLanguage("tr")}
              className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded transition-colors cursor-pointer ${
                locale === "tr" ? "bg-blue-600 text-white" : "text-white/85 hover:text-white"
              }`}
            >
              TR
            </button>
            <button
              onClick={() => toggleLanguage("en")}
              className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded transition-colors cursor-pointer ${
                locale === "en" ? "bg-blue-600 text-white" : "text-white/85 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION HEADER */}
      <header
        className={`sticky top-0 w-full z-45 transition-all duration-300 border-b border-slate-200/60 bg-white ${
          scrolled ? "shadow-md py-2" : "py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center" ref={dropdownRef}>
          
          {/* Logo with public/logo-tom.png */}
          <Link href={`/${locale}`} className="flex items-center gap-2 group shrink-0">
            <Image
              src="/logo-tom.png"
              alt={common.brand}
              width={160}
              height={44}
              priority
              className="h-10 md:h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Menu (Old Navbar structure with Maersk-inspired styling) */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* 1. Ana Sayfa / Home Link */}
            <Link
              href={`/${locale}`}
              className={`font-bold text-sm tracking-wide transition-colors py-2 ${
                isActive(`/${locale}`) && pathname === `/${locale}`
                  ? "text-blue-600"
                  : "text-slate-800 hover:text-blue-600"
              }`}
            >
              {dict.home}
            </Link>

            {/* 2. Kurumsal / Corporate Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`font-bold text-sm tracking-wide transition-colors flex items-center gap-0.5 cursor-pointer py-2 focus:outline-none ${
                  isCorporateActive ? "text-blue-600" : "text-slate-800 hover:text-blue-600"
                }`}
              >
                <span>{dict.corporate}</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {/* Dropdown Container */}
              <div
                className={`absolute left-0 top-full pt-2.5 w-52 transition-all duration-200 z-50 ${
                  dropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                <div className="bg-white border border-slate-200 rounded-xl shadow-xl py-1.5 px-1 flex flex-col gap-0.5">
                  {corporateItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setDropdownOpen(false)}
                      className={`block px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
                        isActive(item.path)
                          ? "text-blue-600 bg-slate-50"
                          : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Hizmetlerimiz / Services Link */}
            <Link
              href={`/${locale}/services`}
              className={`font-bold text-sm tracking-wide transition-colors py-2 ${
                isActive(`/${locale}/services`) ? "text-blue-600" : "text-slate-800 hover:text-blue-600"
              }`}
            >
              {dict.services}
            </Link>

            {/* 4. İletişim / Contact Link */}
            <Link
              href={`/${locale}/contact`}
              className={`font-bold text-sm tracking-wide transition-colors py-2 ${
                isActive(`/${locale}/contact`) ? "text-blue-600" : "text-slate-800 hover:text-blue-600"
              }`}
            >
              {dict.contact}
            </Link>
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer Menu Content */}
      <div
        className={`fixed right-0 top-0 h-full w-4/5 max-w-sm bg-white text-slate-850 z-50 shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 lg:hidden transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Header */}
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
            <Link href={`/${locale}`} className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <Image
                src="/logo-tom.png"
                alt={common.brand}
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-slate-800">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation accordions for mobile */}
          <nav className="flex flex-col gap-2 font-semibold text-sm">
            <Link
              href={`/${locale}`}
              onClick={() => setIsOpen(false)}
              className={`py-2.5 border-b border-slate-100 ${
                isActive(`/${locale}`) && pathname === `/${locale}` ? "text-blue-600" : "text-slate-800"
              }`}
            >
              {dict.home}
            </Link>
            
            {/* Corporate Accordion */}
            <div>
              <button
                onClick={() => setMobileAccordionOpen(!mobileAccordionOpen)}
                className={`w-full text-left py-2.5 border-b border-slate-100 flex justify-between items-center ${
                  isCorporateActive ? "text-blue-600" : "text-slate-800"
                }`}
              >
                <span>{dict.corporate}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileAccordionOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileAccordionOpen && (
                <div className="pl-4 py-1.5 flex flex-col gap-2.5 bg-slate-50 rounded-lg mt-1 animate-fade-in">
                  {corporateItems.map((item, i) => (
                    <Link
                      key={i}
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-xs font-semibold block ${isActive(item.path) ? "text-blue-600" : "text-slate-600"}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href={`/${locale}/services`}
              onClick={() => setIsOpen(false)}
              className={`py-2.5 border-b border-slate-100 ${isActive(`/${locale}/services`) ? "text-blue-600" : "text-slate-800"}`}
            >
              {dict.services}
            </Link>

            <Link
              href={`/${locale}/contact`}
              onClick={() => setIsOpen(false)}
              className={`py-2.5 border-b border-slate-100 ${isActive(`/${locale}/contact`) ? "text-blue-600" : "text-slate-800"}`}
            >
              {dict.contact}
            </Link>
          </nav>
        </div>

        {/* Footer of Drawer */}
        <div className="pt-6 border-t border-slate-100">
          <p className="text-xs text-slate-400 mb-2">{common.hours}</p>
          <a
            href={`tel:${common.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 text-sm font-semibold text-blue-600"
          >
            <PhoneCall className="w-4 h-4" />
            {common.phone}
          </a>
        </div>

      </div>
    </>
  );
}
