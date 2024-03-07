import '@/styles/blocks.scss'
import '@/styles/globals.scss'

import {cms} from '@/cms'
import {FooterSchema} from '@/components/footer/Footer.schema'
import {HeaderSchema} from '@/components/header/Header.schema'
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
  const header = await cms.locale(locale).get(HeaderSchema())
  const footer = await cms.locale(locale).get(FooterSchema())

  return (
    <html lang={locale}>
      <body className={`${inter.className}`}>
        {/* <Header data={header} language={params.locale} /> */}
        {children}
        {/* <Footer data={footer} language={params.locale} /> */}
      </body>
    </html>
  )
}
