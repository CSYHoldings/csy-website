import { localeMetadata, siteName } from "@/constants/seo";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: siteName,
    description: localeMetadata.en.description,
    start_url: "/en",
    scope: "/",
    display: "standalone",
    background_color: "#07070c",
    theme_color: "#7c5cff",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
