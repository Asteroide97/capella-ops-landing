import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/producto",
    "/modulos",
    "/planes",
    "/demo",
    "/distribuidores",
    "/politica-de-privacidad",
    "/terminos-de-servicio"
  ];

  return routes.map((route) => ({
    url: `https://capellaops.com${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
