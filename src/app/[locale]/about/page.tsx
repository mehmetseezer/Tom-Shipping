import React from "react";
import { getDictionary } from "../dictionaries";
import AboutClient from "@/components/AboutClient";

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

  return <AboutClient dict={dict} locale={locale} />;
}
