import { EventLaunch } from "@/components/EventLaunch";
import {
  getAbsoluteUrl,
  getLocaleMetadata,
  siteName,
  type SiteLocale,
} from "@/constants/seo";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const eventPaths: Record<SiteLocale, string> = {
  en: "/en/events/csy-rs-finance-competition-2026",
  zh: "/zh/events/csy-rs-finance-competition-2026",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const siteLocale = (
    hasLocale(routing.locales, locale) ? locale : routing.defaultLocale
  ) as SiteLocale;
  const baseMeta = getLocaleMetadata(siteLocale);
  const isZh = siteLocale === "zh";

  const title = isZh
    ? `交易大赛 | ${siteName} × RS Finance`
    : `Trading Competition | ${siteName} × RS Finance`;
  const description = isZh
    ? "CSY Group 与 RS Finance 联合举办交易大赛：4 月 27 日至 6 月 20 日，赢取香港之旅、现金大奖与会员专属福利。"
    : "Join the CSY Group × RS Finance Trading Competition (Apr 27 – Jun 20). Compete for a Hong Kong trip, cash prizes, and member-only perks.";
  const path = eventPaths[siteLocale];

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        ...eventPaths,
        "x-default": eventPaths[routing.defaultLocale as SiteLocale],
      },
    },
    openGraph: {
      title,
      description,
      url: getAbsoluteUrl(path),
      siteName,
      locale: baseMeta.locale,
      alternateLocale: [baseMeta.alternateLocale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function EventLaunchPage({ params }: PageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return <EventLaunch />;
}
