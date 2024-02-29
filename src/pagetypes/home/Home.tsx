import {Blocks} from '@/blocks/Blocks'
import {cms} from '@/cms'
import {Image} from '@/ui/Image'
import {WebText} from '@/ui/WebText'
import {fromModule} from '@/utils/styler/Styler'
import {notFound} from 'next/navigation'
import css from './Home.module.scss'
import {Hero} from '@/components/hero/Hero'
import {HomeSchema} from './Home.schema'

type ParamsType = {params: {locale: string}}

const styles = fromModule(css)
export default async function Home({params}: ParamsType) {
  const page = await cms.locale(params.locale).get(HomeSchema())
  if (!page) notFound()

  return (
    <div>
      <Image {...page.hero.image} sizes="100vw" />
      <Blocks blocks={page.blocks} params={{...params, slug: []}} />
    </div>
  )
}
