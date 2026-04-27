import { EventTradingCompetition } from "@/components/EventTradingCompetition";
import { links } from "@/constants/links";
import {
  eventAlternateLanguages,
  eventPaths,
  getAbsoluteUrl,
  getLocaleMetadata,
  siteName,
  siteUrl,
  type SiteLocale,
} from "@/constants/seo";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const eventStartDate = "2026-04-27";
const eventEndDate = "2026-06-20";
const posterPath = "/csy-rs-finance-competition-2026.jpg";
const posterWidth = 853;
const posterHeight = 1280;

const eventCopy: Record<
  SiteLocale,
  {
    title: string;
    description: string;
    eventName: string;
    posterAlt: string;
    breadcrumbHome: string;
    keywords: string[];
  }
> = {
  en: {
    title: "Trading Competition 2026 (Apr 27 – Jun 20) | CSY × RS Finance",
    description:
      "Join the CSY Group × RS Finance Trading Competition (Apr 27 – Jun 20, 2026). Compete for a Hong Kong WikiFX trip, MYR cash prizes, and member-only perks.",
    eventName: "CSY Group × RS Finance Trading Competition 2026",
    posterAlt: "CSY Group × RS Finance Trading Competition 2026 poster",
    breadcrumbHome: "Home",
    keywords: [
      "trading competition 2026",
      "RS Finance trading contest",
      "MT5 trading challenge",
      "CSY Group competition",
      "Hong Kong WikiFX trip",
      "MYR cash prize trading",
      "gold trading competition",
      "crypto trading contest",
      "Discord trading competition",
      "online trading tournament",
    ],
  },
  zh: {
    title: "2026 交易大赛（4月27日–6月20日）| CSY × RS Finance",
    description:
      "CSY Group 与 RS Finance 联合举办 2026 交易大赛（4 月 27 日至 6 月 20 日），赢取香港 WikiFX 之旅、马币现金大奖与会员专属福利。",
    eventName: "CSY Group × RS Finance 2026 交易大赛",
    posterAlt: "CSY Group × RS Finance 2026 交易大赛海报",
    breadcrumbHome: "首页",
    keywords: [
      "2026 交易大赛",
      "RS Finance 交易比赛",
      "MT5 交易比赛",
      "CSY Group 比赛",
      "香港 WikiFX 之旅",
      "马币现金奖励",
      "黄金交易比赛",
      "加密货币交易比赛",
      "Discord 交易大赛",
      "线上交易锦标赛",
    ],
  },
};

const resolveLocale = (locale: string): SiteLocale =>
  (hasLocale(routing.locales, locale)
    ? locale
    : routing.defaultLocale) as SiteLocale;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const siteLocale = resolveLocale(locale);
  const baseMeta = getLocaleMetadata(siteLocale);
  const copy = eventCopy[siteLocale];
  const path = eventPaths[siteLocale];
  const posterUrl = getAbsoluteUrl(posterPath);

  return {
    title: copy.title,
    description: copy.description,
    keywords: copy.keywords,
    alternates: {
      canonical: path,
      languages: eventAlternateLanguages,
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: getAbsoluteUrl(path),
      siteName,
      locale: baseMeta.locale,
      alternateLocale: [baseMeta.alternateLocale],
      type: "website",
      images: [
        {
          url: posterUrl,
          width: posterWidth,
          height: posterHeight,
          alt: copy.posterAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: [posterUrl],
    },
  };
}

export default async function EventPage({ params }: PageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const siteLocale = locale as SiteLocale;
  const baseMeta = getLocaleMetadata(siteLocale);
  const copy = eventCopy[siteLocale];
  const url = getAbsoluteUrl(eventPaths[siteLocale]);
  const posterUrl = getAbsoluteUrl(posterPath);

  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: copy.eventName,
    description: copy.description,
    image: posterUrl,
    startDate: eventStartDate,
    endDate: eventEndDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: {
      "@type": "VirtualLocation",
      url: links.discord,
    },
    organizer: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
    offers: {
      "@type": "Offer",
      url: links.eventBrokerRegister,
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      validFrom: eventStartDate,
    },
    inLanguage: baseMeta.inLanguage,
    url,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: copy.breadcrumbHome,
        item: getAbsoluteUrl(`/${siteLocale}`),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: copy.eventName,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([eventJsonLd, breadcrumbJsonLd]),
        }}
      />
      <EventTradingCompetition />
    </>
  );
}
