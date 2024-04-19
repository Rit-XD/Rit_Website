import {Blocks} from '@/blocks/Blocks'
import {cms} from '@/cms'
import {fromModule} from '@/utils/styler/Styler'
import {notFound} from 'next/navigation'
import css from './Home.module.scss'
import {HomeSchema} from './Home.schema'

const styles = fromModule(css)

type ParamsType = {params: {locale: string; slug: string[]}}

export default async function Home({params}: ParamsType) {
  const page = await cms.locale(params.locale).get(HomeSchema())
  if (!page) notFound()

  return (
    <div className={styles.home()}>
      <Blocks blocks={page.blocks} params={params} />
    </div>
  )
}
