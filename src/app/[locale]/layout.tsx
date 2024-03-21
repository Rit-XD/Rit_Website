import '@/styles/blocks.scss'
import '@/styles/globals.scss'

import {cms} from '@/cms'
import {FooterSchema} from '@/components/footer/Footer.schema'
import {Locale, defaultLocale, locales} from '@/utils/locale'
import localFont from 'next/font/local'

const inter = localFont({
  src: [
    {
      path: '../../assets/fonts/Inter.woff2',
      weight: '100 900',
      style: 'normal'
    }
  ]
})

export async function generateStaticParams(): Promise<{locale: Locale}[]> {
  return locales.map(locale => ({locale}))
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: {locale: Locale}
}) {
  const locale = locales.includes(params?.locale)
    ? params.locale
    : defaultLocale
  const footer = await cms.locale(locale).get(FooterSchema())

  return (
    <html lang={locale}>
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
