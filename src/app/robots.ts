import {MetadataRoute} from 'next'

export default function robots(): MetadataRoute.Robots {
  const appEnv = process.env.NEXT_PUBLIC_APP_ENV
  const appUrl = process.env.NEXT_PUBLIC_APP_URL

  return {
    rules: {
      userAgent: '*',
      allow: appEnv === 'production' ? '/' : '',
      disallow: appEnv === 'production' ? '' : '/'
    },
    sitemap: `${appUrl}/sitemap.xml`
  }
}
