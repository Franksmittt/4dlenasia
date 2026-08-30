import type { MetadataRoute } from "next";
import { PACKAGES, SITE, SUBURBS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/packages`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/understanding-ultrasound`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/our-story`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tracker`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...PACKAGES.map((p) => ({
      url: `${base}/packages/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...SUBURBS.map((s) => ({
      url: `${base}/locations/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
