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
      url: 'https://campaignagent.app/resources', 
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
    // Blog posts
    {
      url: 'https://campaignagent.app/blog/what-is-marketing-campaign-governance',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://campaignagent.app/blog/why-marketing-attribution-fails-b2b-saas',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://campaignagent.app/blog/welcome-to-campaignagent-blog',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Resources
    {
      url: 'https://campaignagent.app/resources/what-is-campaign-governance',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://campaignagent.app/resources/campaign-attribution-without-bi-team',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://campaignagent.app/resources/hubspot-campaign-management-visibility-gap',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://campaignagent.app/resources/campaign-approval-workflow-that-scales',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://campaignagent.app/resources/campaign-roi-tracking-for-cmos',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://campaignagent.app/resources/marketing-campaign-system-of-record',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
