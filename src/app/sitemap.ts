import {
  alternateLanguages,
  getAbsoluteUrl,
  localePaths,
} from "@/constants/seo";
import { routing } from "@/i18n/routing";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    Object.entries(alternateLanguages).map(([locale, path]) => [
      locale,
      getAbsoluteUrl(path),
    ]),
  );

  return routing.locales.map((locale) => ({
    url: getAbsoluteUrl(localePaths[locale]),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: locale === routing.defaultLocale ? 1 : 0.9,
    alternates: {
      languages,
    },
  }));
}
