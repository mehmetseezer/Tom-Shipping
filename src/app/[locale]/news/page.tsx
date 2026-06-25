import React from "react";
import { Calendar, Anchor, ArrowRight } from "lucide-react";
import { getDictionary } from "../dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict.nav.news,
    description: dict.news.subtitle,
  };
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const newsItems = [
    {
      title: dict.news.items.n1.title,
      date: dict.news.items.n1.date,
      summary: dict.news.items.n1.summary,
    },
    {
      title: dict.news.items.n2.title,
      date: dict.news.items.n2.date,
      summary: dict.news.items.n2.summary,
    },
    {
      title: dict.news.items.n3.title,
      date: dict.news.items.n3.date,
      summary: dict.news.items.n3.summary,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50">
      {/* Page Header (Light Theme) */}
      <section className="bg-slate-100 text-slate-800 py-16 md:py-20 relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center gap-3">
          <span className="text-blue-600 font-bold text-xs tracking-widest uppercase">
            {dict.common.brand} Press Room
          </span>
          <h1 className="font-display font-black text-4xl md:text-5xl tracking-tight text-slate-900">
            {dict.news.title}
          </h1>
          <div className="w-12 h-1 bg-blue-600 rounded-full my-1" />
          <p className="text-slate-600 text-sm md:text-base max-w-xl leading-relaxed">
            {dict.news.subtitle}
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:border-blue-500/20"
            >
              <div className="p-6 md:p-8 flex flex-col gap-4">
                {/* Date & Icon */}
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span>{item.date}</span>
                </div>
                {/* Title */}
                <h3 className="font-display font-bold text-lg md:text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                {/* Summary */}
                <p className="text-slate-550 text-sm leading-relaxed">
                  {item.summary}
                </p>
              </div>

              {/* Bottom Row */}
              <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-slate-800 font-bold text-xs flex items-center gap-1 group-hover:text-blue-500 transition-colors">
                  {dict.common.readMore} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <Anchor className="w-4 h-4 text-slate-200 group-hover:text-blue-500/20 transition-colors" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
