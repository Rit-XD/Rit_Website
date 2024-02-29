import {Blocks} from '@/blocks/Blocks'
import {cms} from '@/cms'
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
      <h1>{page.title}</h1>
      <Blocks blocks={page.blocks} params={params} />
    </main>
  )
}
