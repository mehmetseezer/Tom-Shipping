"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Globe, Menu, X, PhoneCall, ChevronDown } from "lucide-react";

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
  };
}

export default function Header({ locale, dict, common }: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Scroll effect for header background
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

  // Dropdown click outside close handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const corporateItems = [
    { name: dict.about, path: `/${locale}/about` },
    { name: dict.fleet, path: `/${locale}/fleet` },
    { name: dict.sustainability, path: `/${locale}/sustainability` },
    { name: dict.careers, path: `/${locale}/careers` },
    { name: dict.news, path: `/${locale}/news` },
  ];

  // Helper to switch language preserving the sub-path
  const toggleLanguage = (targetLang: string) => {
    if (locale === targetLang) return;
    const segments = pathname.split("/");
    segments[1] = targetLang;
    const newPathname = segments.join("/");
    router.push(newPathname);
    setIsOpen(false);
    setDropdownOpen(false);
  };

  // Check if any corporate item is active
  const isCorporateActive = corporateItems.some((item) => pathname.startsWith(item.path));

  // Helper to check if item is active
  const isActive = (path: string) => {
    if (path === `/${locale}`) {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Bar for Contact Info (Light Gray background in light theme) */}
      <div className="bg-slate-50 text-slate-600 text-xs py-2.5 px-4 md:px-8 flex justify-between items-center border-b border-slate-200 z-50 relative">
        <div className="flex items-center gap-4">
          <span className="font-medium">{common.hours}</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`tel:${common.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors font-medium"
          >
            <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
            <span>{common.phone}</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 w-full z-45 transition-all duration-300 border-b border-slate-200/60 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2.5"
            : "bg-white py-4.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {/* Home */}
            <Link
              href={`/${locale}`}
              className={`font-semibold text-sm tracking-wide transition-all duration-300 relative py-1 ${
                isActive(`/${locale}`) && pathname === `/${locale}`
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {dict.home}
              {isActive(`/${locale}`) && pathname === `/${locale}` && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
              )}
            </Link>

            {/* Corporate Dropdown */}
            <div
              ref={dropdownRef}
              className="relative py-1"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`font-semibold text-sm tracking-wide transition-all duration-300 flex items-center gap-1 cursor-pointer focus:outline-none ${
                  isCorporateActive ? "text-blue-600" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>{dict.corporate}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isCorporateActive && (
                <span className="absolute bottom-0 left-0 w-[calc(100%-20px)] h-0.5 bg-blue-600 rounded-full" />
              )}

              {/* Dropdown Menu Wrapper (Starts contiguous at top-full, keeping mouse tracking active) */}
              <div
                className={`absolute left-0 top-full pt-3 w-56 transition-all duration-300 z-50 ${
                  dropdownOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                {/* Styled Menu Card */}
                <div className="bg-white border border-slate-200 rounded-xl shadow-xl py-2 px-1 flex flex-col gap-0.5">
                  {corporateItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setDropdownOpen(false)}
                      className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                        isActive(item.path)
                          ? "text-blue-600 bg-slate-50 font-semibold"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-55/60"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Services */}
            <Link
              href={`/${locale}/services`}
              className={`font-semibold text-sm tracking-wide transition-all duration-300 relative py-1 ${
                isActive(`/${locale}/services`) ? "text-blue-600" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {dict.services}
              {isActive(`/${locale}/services`) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
              )}
            </Link>

            {/* Contact */}
            <Link
              href={`/${locale}/contact`}
              className={`font-semibold text-sm tracking-wide transition-all duration-300 relative py-1 ${
                isActive(`/${locale}/contact`) ? "text-blue-600" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {dict.contact}
              {isActive(`/${locale}/contact`) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
              )}
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center gap-1.5 border-l border-slate-200 pl-6 ml-1">
              <Globe className="w-4 h-4 text-slate-400" />
              <button
                onClick={() => toggleLanguage("tr")}
                className={`text-xs font-bold px-2 py-1 rounded transition-colors cursor-pointer ${
                  locale === "tr" ? "bg-blue-600 text-white" : "text-slate-500 hover:text-slate-800"
                }`}
              >
                TR
              </button>
              <button
                onClick={() => toggleLanguage("en")}
                className={`text-xs font-bold px-2 py-1 rounded transition-colors cursor-pointer ${
                  locale === "en" ? "bg-blue-600 text-white" : "text-slate-500 hover:text-slate-800"
                }`}
              >
                EN
              </button>
            </div>
          </nav>

          {/* Mobile Menu & Language Toggle button */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Quick Lang Switch */}
            <button
              onClick={() => toggleLanguage(locale === "tr" ? "en" : "tr")}
              className="flex items-center gap-1 text-xs font-bold px-2.5 py-1.5 rounded bg-slate-100 text-slate-600 hover:text-slate-800 border border-slate-200"
            >
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span>{locale === "tr" ? "EN" : "TR"}</span>
            </button>

            {/* Mobile Menu Toggle */}
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

      {/* Mobile Drawer (Menu Overlay) */}
      <div
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed right-0 top-0 h-full w-4/5 max-w-sm bg-white text-slate-850 z-50 shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 lg:hidden transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Drawer Header */}
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

          {/* Drawer Links */}
          <nav className="flex flex-col gap-3">
            {/* Home */}
            <Link
              href={`/${locale}`}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                isActive(`/${locale}`) && pathname === `/${locale}`
                  ? "bg-slate-100 text-blue-600 font-semibold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {dict.home}
            </Link>

            {/* Collapsible Corporate Accordion */}
            <div>
              <button
                onClick={() => setMobileAccordionOpen(!mobileAccordionOpen)}
                className={`w-full text-left text-base font-medium py-2 px-3 rounded-lg flex justify-between items-center transition-colors ${
                  isCorporateActive
                    ? "bg-slate-50 text-blue-600 font-semibold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span>{dict.corporate}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileAccordionOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`pl-4 flex flex-col gap-2 overflow-hidden transition-all duration-350 ${
                  mobileAccordionOpen ? "max-h-64 mt-2 mb-1" : "max-h-0"
                }`}
              >
                {corporateItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium py-1.5 px-3 rounded-lg transition-colors block ${
                      isActive(item.path)
                        ? "text-blue-600 font-semibold bg-slate-50"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <Link
              href={`/${locale}/services`}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                isActive(`/${locale}/services`)
                  ? "bg-slate-100 text-blue-600 font-semibold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {dict.services}
            </Link>

            {/* Contact */}
            <Link
              href={`/${locale}/contact`}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                isActive(`/${locale}/contact`)
                  ? "bg-slate-100 text-blue-600 font-semibold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {dict.contact}
            </Link>
          </nav>
        </div>

        {/* Drawer Footer info */}
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
