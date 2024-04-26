import {cms} from '@/cms'
import {Entry} from 'alinea/core'
import {MetadataRoute} from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.rit.care'
  const pages = await cms.in(cms.workspaces.main.pages).find(
    Entry().select({
      ...Entry,
      translations({translations}) {
        return translations().select({locale: Entry.locale, url: Entry.url})
      }
    })
  )

  return pages
    .sort(function (a, b) {
      return getPriority(a.type) > getPriority(b.type)
        ? -1
        : getPriority(a.type) < getPriority(b.type)
        ? 1
        : 0
    })
    .map(page => {
      return {
        url: appUrl + page.url,
        lastModified: new Date(page.modifiedAt),
        priority: getPriority(page.type),
        alternateRefs: page.translations.map(translation => ({
          href: appUrl + page.url,
          hrefLang: translation.url
        }))
      }
    })
}

const getPriority = (type: string) => {
  switch (type) {
    case 'Home':
      return 1
    default:
      return 0.6
  }
}
