'use server'

import {cms} from '@/cms'
import {Locale, locales} from '@/utils/locale'
import {Entry} from 'alinea/core'

export async function fetchTranslations(pathname: string) {
  const locale = pathname.split('/')[1]
  if (!locale || !locales.includes(locale as Locale)) return null

  const result = await cms.in(cms.workspaces.main.pages).maybeGet(
    Entry({url: pathname}).select({
      locale: Entry.locale,
      url: Entry.url,
      translations: function ({translations}) {
        return translations(true).select({locale: Entry.locale, url: Entry.url})
      }
    })
  )

  return {
    nl:
      locale === 'nl'
        ? result?.url || '/nl'
        : result?.translations.find(t => t.locale === 'nl')?.url || '/nl',
    en:
      locale === 'en'
        ? result?.url || '/en'
        : result?.translations.find(t => t.locale === 'en')?.url || '/en'
  }
}
