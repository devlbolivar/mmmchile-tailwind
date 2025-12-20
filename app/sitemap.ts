import { MetadataRoute } from "next";
import { zonas } from "@/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mmmchile.cl";

  // Páginas principales
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/iglesias`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/doctrina`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/radio`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/aniversario`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/oficiales-internacionales`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  // Páginas de iglesias por zona
  const churchPages = zonas.flatMap((zona) =>
    zona.iglesias.map((iglesia) => ({
      url: `${baseUrl}/iglesias/${iglesia.id}`,
      lastModified: iglesia.updatedAt || new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }))
  );

  return [...mainPages, ...churchPages];
}
