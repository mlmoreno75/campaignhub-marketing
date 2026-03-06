import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { 
      url: 'https://campaignagent.app', 
      lastModified: new Date(), 
      changeFrequency: 'weekly', 
      priority: 1 
    },
    { 
      url: 'https://campaignagent.app/about', 
      lastModified: new Date(), 
      changeFrequency: 'monthly', 
      priority: 0.8 
    },
    { 
      url: 'https://campaignagent.app/roi', 
      lastModified: new Date(), 
      changeFrequency: 'weekly', 
      priority: 0.9 
    },
    { 
      url: 'https://campaignagent.app/blog', 
      lastModified: new Date(), 
      changeFrequency: 'weekly', 
      priority: 0.8 
    },
    { 
      url: 'https://campaignagent.app/privacy', 
      lastModified: new Date(), 
      changeFrequency: 'yearly', 
      priority: 0.3 
    },
    { 
      url: 'https://campaignagent.app/terms', 
      lastModified: new Date(), 
      changeFrequency: 'yearly', 
      priority: 0.3 
    },
  ]
}
