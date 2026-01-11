// src/app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://legalbabydistribution.com';
  
  const routes = [
    '',
    '/about',
    '/services',
    '/services/distribution',
    '/services/promotion',
    '/services/playlists',
    '/services/label',
    '/services/advances',
    '/why-us',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}

