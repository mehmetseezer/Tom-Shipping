import React from "react";
import { getDictionary } from "../dictionaries";
import ServicesClient from "@/components/ServicesClient";

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

  return <ServicesClient dict={dict} locale={locale} />;
}
