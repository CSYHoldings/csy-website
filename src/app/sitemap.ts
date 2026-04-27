import {
  alternateLanguages,
  eventAlternateLanguages,
  eventPaths,
  getAbsoluteUrl,
  localePaths,
} from "@/constants/seo";
import { routing } from "@/i18n/routing";
import type { MetadataRoute } from "next";

const toAbsoluteLanguages = (languages: Record<string, string>) =>
  Object.fromEntries(
    Object.entries(languages).map(([locale, path]) => [
      locale,
      getAbsoluteUrl(path),
    ]),
  );

export default function sitemap(): MetadataRoute.Sitemap {
  const homeLanguages = toAbsoluteLanguages(alternateLanguages);
  const eventLanguages = toAbsoluteLanguages(eventAlternateLanguages);
  const lastModified = new Date();

  const home = routing.locales.map((locale) => ({
    url: getAbsoluteUrl(localePaths[locale]),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: locale === routing.defaultLocale ? 1 : 0.9,
    alternates: { languages: homeLanguages },
  }));

  const events = routing.locales.map((locale) => ({
    url: getAbsoluteUrl(eventPaths[locale]),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
    alternates: { languages: eventLanguages },
  }));

  return [...home, ...events];
}
