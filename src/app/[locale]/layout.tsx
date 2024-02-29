import '@/styles/blocks.scss'
import '@/styles/globals.scss'

import {cms} from '@/cms'
import {Footer} from '@/components/footer/Footer'
import {FooterSchema} from '@/components/footer/Footer.schema'
import {Header} from '@/components/header/Header'
import {HeaderSchema} from '@/components/header/Header.schema'
import {Locale, defaultLocale, locales} from '@/utils/locale'
import localFont from 'next/font/local'

// const metropolis = localFont({
//   src: [
//     {
//       path: '../../assets/fonts/Metropolis-Regular.woff2',
//       weight: '400',
//       style: 'normal'
//     },
//     {
//       path: '../../assets/fonts/Metropolis-Medium.woff2',
//       weight: '500',
//       style: 'normal'
//     },
//     {
//       path: '../../assets/fonts/Metropolis-SemiBold.woff2',
//       weight: '600',
//       style: 'normal'
//     }
//   ]
// })

// const sourceSerifPro = localFont({
//   variable: '--sourceSerifPro',
//   display: 'swap',
//   src: [
//     {
//       path: '../../assets/fonts/source-serif-pro-v7-latin-regular.woff2',
//       weight: '400',
//       style: 'normal'
//     },
//     {
//       path: '../../assets/fonts/source-serif-pro-v7-latin-700.woff2',
//       weight: '700',
//       style: 'normal'
//     }
//   ]
// })

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
      <body>
        {/* className={`${metropolis.className} ${sourceSerifPro.variable}`} */}
        {/* <Header data={header} language={params.locale} /> */}
        {children}
        {/* <Footer data={footer} language={params.locale} /> */}
      </body>
    </html>
  )
}
