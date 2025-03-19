// ~/nuxt.config.ts
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@vueuse/motion/nuxt',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],
  css: ['~/assets/css/index.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    optimizeDeps: {
      include: ['ogl'], // Pre-bundle ogl to avoid runtime issues
    },
    build: {
      rollupOptions: {
        external: [], // Ensure ogl isn't externalized incorrectly
      },
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ), // Ensure env is defined
    },
  },
  compatibilityDate: '2025-02-26',

  // Add SEO settings for Qurany Piroz
  app: {
    head: {
      title: 'قورئانی پیرۆز — پەڕتووکی خودا',
      htmlAttrs: {
        lang: 'ku',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'بەرنامەی مۆبایلیی "قورئانی پیرۆز — پەڕتووکی خودا" بۆ گرتنەبەری گەشتێکی پڕ لە تێگەیشتنە بەنێو ئایەتەکانی قورئان بە زمانی شیرینی کوردی (هەرسێ زار و شێوەزاری کوردیی ناوەندی و بادینانی و هەورامانی) بەدوازدە تەفسیری کوردی و فەرهەنگێکی ڕیشەییی وشەکانی قورئانەوە.',
        },
        { name: 'format-detection', content: 'telephone=no' },
        // Open Graph tags for social sharing
        { property: 'og:title', content: 'قورئانی پیرۆز — پەڕتووکی خودا' },
        {
          property: 'og:description',
          content:
            'بەرنامەی مۆبایلیی "قورئانی پیرۆز — پەڕتووکی خودا" بۆ گرتنەبەری گەشتێکی پڕ لە تێگەیشتنە بەنێو ئایەتەکانی قورئان بە زمانی شیرینی کوردی',
        },
        {
          property: 'og:image',
          content: 'http://qurany-piroz.com/og-image.jpg',
        },
        { property: 'og:url', content: 'http://qurany-piroz.com' },
        { property: 'og:type', content: 'website' },
        // Additional tags for better SEO
        {
          name: 'keywords',
          content:
            'قورئان, قورئانی پیرۆز, کوردی, تەفسیر, پەڕتووکی خودا, Quran, Kurdish',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'http://qurany-piroz.com' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'قورئانی پیرۆز — پەڕتووکی خودا',
            url: 'http://qurany-piroz.com',
            description:
              'بەرنامەی مۆبایلیی "قورئانی پیرۆز — پەڕتووکی خودا" بۆ گرتنەبەری گەشتێکی پڕ لە تێگەیشتنە بەنێو ئایەتەکانی قورئان بە زمانی شیرینی کوردی',
            inLanguage: 'ku',
          }),
        },
      ],
    },
  },

  // Robots configuration
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'http://qurany-piroz.com/sitemap.xml',
  },

  // Sitemap configuration
  sitemap: {
    hostname: 'http://qurany-piroz.com',
    gzip: true,
  },
});
