import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import {
  alternateLanguages,
  brandColor,
  defaultOgImage,
  getAbsoluteUrl,
  getJsonLd,
  getLocaleMetadata,
  siteName,
  siteUrl,
  type SiteLocale,
} from "@/constants/seo";
import { routing } from "@/i18n/routing";
import type { Metadata, Viewport } from "next";
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

const metadataBase = new URL(siteUrl);

export const viewport: Viewport = {
  themeColor: brandColor,
  colorScheme: "dark",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Pick<LocaleLayoutProps, "params">): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    const metadata = getLocaleMetadata(routing.defaultLocale);

    return {
      title: metadata.title,
      description: metadata.description,
    };
  }

  const metadata = getLocaleMetadata(locale);
  const path = `/${locale}`;
  const url = getAbsoluteUrl(path);

  return {
    metadataBase,
    title: metadata.title,
    description: metadata.description,
    verification: {
      google: "OahHilAxcWDeE5Hvl2ki5WV-hTYEzFR9rL8bv5w5q48",
    },
    applicationName: siteName,
    authors: [{ name: siteName, url: siteUrl }],
    creator: siteName,
    publisher: siteName,
    category: "Trading education",
    keywords: [...metadata.keywords],
    manifest: "/manifest.webmanifest",
    referrer: "origin-when-cross-origin",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: path,
      languages: alternateLanguages,
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url,
      siteName,
      locale: metadata.locale,
      alternateLocale: [metadata.alternateLocale],
      type: "website",
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: `${siteName} trading education community`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [defaultOgImage],
    },
    appleWebApp: {
      title: siteName,
      capable: true,
      statusBarStyle: "black-translucent",
    },
    formatDetection: {
      telephone: false,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const siteLocale = locale as SiteLocale;
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const jsonLd = getJsonLd(siteLocale);

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
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
