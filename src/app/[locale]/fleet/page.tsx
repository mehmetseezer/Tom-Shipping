import React from "react";
import { getDictionary } from "../dictionaries";
import FleetClient from "@/components/FleetClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict.nav.fleet,
    description: dict.fleet.subtitle,
  };
}

export default async function FleetPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return <FleetClient dict={dict} locale={locale} />;
}
