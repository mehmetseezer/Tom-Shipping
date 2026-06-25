import React from "react";
import { getDictionary } from "../dictionaries";
import NewsClient from "@/components/NewsClient";

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

  return <NewsClient dict={dict} locale={locale} />;
}
