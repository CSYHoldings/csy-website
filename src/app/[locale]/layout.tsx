import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

const metadataByLocale = {
  en: {
    title: "CSY Group | Trade With Structure",
    description:
      "CSY Group is a Discord-based trading education community. Our edge is depth data: reading how institutional money positions and where flow is heading.",
  },
  zh: {
    title: "CSY Group | 结构化交易",
    description:
      "CSY Group 是一个以 Discord 为核心的交易教育社区，专注于深度数据、订单流语境与机构资金定位。",
  },
} as const;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Pick<LocaleLayoutProps, "params">): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    return metadataByLocale[routing.defaultLocale];
  }

  return metadataByLocale[locale];
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-background text-foreground">
        <NextIntlClientProvider
          key={locale}
          locale={locale}
          messages={messages}
        >
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
