// nuxt.config.ts
export default defineNuxtConfig({
  ssr: true,
  css: ['@/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss'],

  meta: {
    title: 'AI Services - Revolutionizing Solutions with AI', // Default title
    description: 'Explore cutting-edge AI solutions tailored for your business needs. From machine learning to natural language processing, we provide innovative services.',
    charset: 'UTF-8',
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow', // Ensure pages are indexed by search engines
  },

  // Dynamic Meta Tags for each page
  app: {
    head: {
      link: [
        { rel: 'icon', href: '/favicon.ico' },

  { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' }
]
    },
  },

  // Customize robots.txt and sitemap generation
  sitemap: {
    hostname: 'https://yourdomain.com',
    gzip: true,
    routes: [
      '/service/machine-learning',
      '/service/natural-language-processing',
      '/about',
      '/contact',
    ],
  },

  // Optional: Configure the structured data (JSON-LD) for AI services
  structuredData: [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'AI Services Company',
      url: 'https://yourdomain.com',
      logo: 'https://yourdomain.com/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: '+1-800-123-4567',
        areaServed: 'US',
        availableLanguage: 'English',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Machine Learning Solutions',
      description: 'We offer state-of-the-art machine learning solutions tailored to your business needs.',
      provider: {
        '@type': 'Organization',
        name: 'AI Services Company',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Natural Language Processing',
      description: 'Our natural language processing (NLP) services allow businesses to analyze and understand human language.',
      provider: {
        '@type': 'Organization',
        name: 'AI Services Company',
      },
    },
  ],

  compatibilityDate: '2024-12-01',
})