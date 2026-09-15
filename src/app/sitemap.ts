import type { MetadataRoute } from "next";

const SITE_URL = "https://www.surjansinghthakuri.com.np";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1 },
    { url: `${SITE_URL}/projects`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/experience`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/skills`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  return pages;
}
