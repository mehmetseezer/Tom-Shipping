import React from "react";
import { getDictionary } from "../dictionaries";
import CareersClient from "@/components/CareersClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict.nav.careers,
    description: dict.careers.subtitle,
  };
}

export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return <CareersClient dict={dict} locale={locale} common={dict.common} />;
}
