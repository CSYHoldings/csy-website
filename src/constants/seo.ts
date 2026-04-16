import { links } from "@/constants/links";
import { routing } from "@/i18n/routing";

export const siteUrl = "https://csyholdings.com";
export const siteName = "CSY Group";
export const brandColor = "#d14e52";
export const defaultOgImage = `${siteUrl}/og-image.png`;

export const localeMetadata = {
  en: {
    title: "CSY Group | Discord Trading Community for Gold & Crypto",
    description:
      "Join CSY Group, a Discord trading education community for gold and crypto traders. Learn depth data, ATAS-style order flow, institutional positioning, daily market analysis, and live trade sessions.",
    keywords: [
      "CSY Group",
      "Discord trading community",
      "gold trading community",
      "crypto trading community",
      "trading education",
      "order flow trading",
      "depth data trading",
      "ATAS trading",
      "institutional flow",
      "market analysis",
      "live trade sessions",
    ],
    locale: "en_US",
    alternateLocale: "zh_CN",
    inLanguage: "en",
  },
  zh: {
    title: "CSY Group | 黄金与加密货币 Discord 交易社区",
    description:
      "加入 CSY Group Discord 交易教育社区，学习黄金与加密市场分析、深度数据、ATAS 风格订单流、机构资金定位、每日复盘与直播交易课程。",
    keywords: [
      "CSY Group",
      "Discord 交易社区",
      "黄金交易社区",
      "加密货币交易社区",
      "交易教育",
      "订单流交易",
      "深度数据交易",
      "ATAS 交易",
      "机构订单流",
      "市场分析",
      "直播交易",
    ],
    locale: "zh_CN",
    alternateLocale: "en_US",
    inLanguage: "zh-Hans",
  },
} as const;

export type SiteLocale = keyof typeof localeMetadata;

export const localePaths = Object.fromEntries(
  routing.locales.map((locale) => [locale, `/${locale}`]),
) as Record<SiteLocale, string>;

export const alternateLanguages = {
  ...localePaths,
  "x-default": `/${routing.defaultLocale}`,
};

export function getAbsoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function getLocaleMetadata(locale: string) {
  return localeMetadata[locale as SiteLocale] ?? localeMetadata.en;
}

export function getJsonLd(locale: SiteLocale) {
  const metadata = localeMetadata[locale];
  const url = getAbsoluteUrl(localePaths[locale]);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: getAbsoluteUrl("/logo.png"),
        },
        image: defaultOgImage,
        sameAs: [links.instagram],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: siteName,
        url: siteUrl,
        inLanguage: metadata.inLanguage,
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: metadata.title,
        description: metadata.description,
        inLanguage: metadata.inLanguage,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#organization`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: defaultOgImage,
          width: 1200,
          height: 630,
        },
      },
      {
        "@type": "EducationalOrganization",
        "@id": `${siteUrl}/#education-community`,
        name: siteName,
        url,
        description: metadata.description,
        sameAs: [links.instagram],
      },
    ],
  };
}
