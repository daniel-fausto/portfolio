import type { MetadataRoute } from "next";
import { SITE_URL } from "./content";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { es: `${SITE_URL}/es`, en: `${SITE_URL}/en` };
  return [
    { url: `${SITE_URL}/es`, alternates: { languages } },
    { url: `${SITE_URL}/en`, alternates: { languages } },
  ];
}
