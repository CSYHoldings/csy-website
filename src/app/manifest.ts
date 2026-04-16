import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CSY Group",
    short_name: "CSY Group",
    description:
      "A Discord-based trading education community focused on depth data, order-flow context, and institutional positioning.",
    start_url: "/",
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
