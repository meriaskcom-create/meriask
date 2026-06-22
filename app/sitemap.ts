import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.meriask.com',
      lastModified: new Date(),
    },
    {
      url: 'https://www.meriask.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://www.meriask.com/services',
      lastModified: new Date(),
    },
    {
      url: 'https://www.meriask.com/portfolio',
      lastModified: new Date(),
    },
    {
      url: 'https://www.meriask.com/pricing',
      lastModified: new Date(),
    },
    {
      url: 'https://www.meriask.com/contact',
      lastModified: new Date(),
    },
  ]
}