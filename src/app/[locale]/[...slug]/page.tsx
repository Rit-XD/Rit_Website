import {cms} from '@/cms'
import Page from '@/pagetypes/page/Page'
import {PageSchema} from '@/pagetypes/page/Page.schema'
import {Locale} from '@/utils/locale'
import getMetadata from '@/utils/metadata'
import {Query} from 'alinea'
import {Entry} from 'alinea/core'
import {Metadata} from 'next'
import {notFound} from 'next/navigation'

type ParamsType = {params: {locale: Locale; slug: string[]}}

export async function generateStaticParams() {
  const pages = await cms
    .in(cms.workspaces.main.pages)
    .find(
      Query.select({type: Query.type, locale: Query.locale, url: Query.url})
    )
  return pages.flatMap(page => {
    if (page.type === 'Home') return []
    return [{locale: page.locale, slug: page.url.split('/').slice(2)}]
  })
}

export async function generateMetadata({
  params
}: ParamsType): Promise<Metadata> {
  const url = `/${params.locale}/${params.slug
    .map(decodeURIComponent)
    .join('/')}`
  const data = await cms
    .locale(params.locale)
    .in(cms.workspaces.main.pages)
    .maybeGet(
      Entry({url}).select({
        url: Entry.url,
        title: PageSchema.title,
        metadata: PageSchema.metadata
      })
    )

  return await getMetadata(data)
}

export default async function RegularPage({params}: ParamsType) {
  const url = `/${params.locale}/${params.slug
    .map(decodeURIComponent)
    .join('/')}`
  const page = await cms
    .locale(params.locale)
    .in(cms.workspaces.main.pages)
    .maybeGet(Entry({url}))

  if (!page) return notFound()

  switch (page.type) {
    case 'Page':
      return <Page url={url} params={params} />
  }
  notFound()
}
