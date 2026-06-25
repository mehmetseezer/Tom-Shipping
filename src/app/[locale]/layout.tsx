import type { Metadata } from "next";
import { getDictionary } from "./dictionaries";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return {
    title: {
      default: dict.common.brand + " | " + dict.common.tagline,
      template: `%s | ${dict.common.brand}`,
    },
    description: dict.home.intro.p1,
    icons: {
      icon: "/logo_favicon.png",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <html
      lang={locale}
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-body">
        <Header locale={locale} dict={dict.nav} common={dict.common} />
        <main className="flex-grow">{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
