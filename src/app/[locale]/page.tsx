import {cms} from '@/cms'
import Home from '@/pagetypes/home/Home'
import {HomeSchema} from '@/pagetypes/home/Home.schema'
import {Locale, locales} from '@/utils/locale'
import getMetadata from '@/utils/metadata'
import {Entry} from 'alinea/core'
import {Metadata} from 'next'
import {notFound} from 'next/navigation'

type ParamsType = {params: {locale: Locale; slug: string[]}}

export async function generateStaticParams() {
  const data = await cms.find(
    HomeSchema().select({
      url: Entry.url,
      locale: Entry.locale
    })
  )
  return data.map(({locale}) => ({locale}))
}

export async function generateMetadata({
  params
}: ParamsType): Promise<Metadata> {
  if (!locales.includes(params.locale)) return await getMetadata(null)

  const data = await cms
    .locale(params.locale)
    .in(cms.workspaces.main.pages)
    .get(
      HomeSchema({path: ''}).select({
        url: Entry.url,
        title: HomeSchema.title,
        metadata: HomeSchema.metadata
      })
    )

  return await getMetadata(data)
}

export default function HomePage({params}: ParamsType) {
  if (!locales.includes(params.locale)) return notFound()
  return <Home params={params} />
}
