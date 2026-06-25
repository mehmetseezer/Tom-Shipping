import React from "react";
import { getDictionary } from "../dictionaries";
import SustainabilityClient from "@/components/SustainabilityClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict.nav.sustainability,
    description: dict.sustainability.subtitle,
  };
}

export default async function SustainabilityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return <SustainabilityClient dict={dict} locale={locale} />;
}
