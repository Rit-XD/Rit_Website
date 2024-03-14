import {Blocks} from '@/blocks/Blocks'
import {cms} from '@/cms'
import {Hero} from '@/components/hero/Hero'
import {Logo} from '@/components/logo/Logo'
import {Locale} from '@/utils/locale'
import {Entry} from 'alinea/core'
import {notFound} from 'next/navigation'
import {PageSchema} from './Page.schema'

type ParamsType = {url: string; params: {locale: Locale; slug: string[]}}

export default async function Page({url, params}: ParamsType) {
  const page = await cms
    .locale(params.locale)
    .maybeGet(PageSchema().where(Entry.url.is(url)))
  if (!page) notFound()

  return (
    <main>
      <Logo />
      <Hero {...page.hero} />
      <Blocks blocks={page.blocks} params={params} />
    </main>
  )
}
