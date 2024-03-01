import {Blocks} from '@/blocks/Blocks'
import {cms} from '@/cms'
import {Image} from '@/ui/Image'
import {fromModule} from '@/utils/styler/Styler'
import {notFound} from 'next/navigation'
import css from './Home.module.scss'
import {HomeSchema} from './Home.schema'

type ParamsType = {params: {locale: string; slug: string[]}}

const styles = fromModule(css)
export default async function Home({params}: ParamsType) {
  const page = await cms.locale(params.locale).get(HomeSchema())
  if (!page) notFound()

  return (
    <div>
      <Image {...page.hero.image} sizes="100vw" />
      <Blocks blocks={page.blocks} params={params} />
    </div>
  )
}
