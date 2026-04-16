import { routing } from "@/i18n/routing";
import type { MetadataRoute } from "next";

const siteUrl = "https://csyholdings.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    routing.locales.map((locale) => [locale, `${siteUrl}/${locale}`]),
  );

  return routing.locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: new Date(),
    alternates: {
      languages,
    },
  }));
}
