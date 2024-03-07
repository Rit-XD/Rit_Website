import {Blocks} from '@/blocks/Blocks'
import {cms} from '@/cms'
import {Logo} from '@/components/logo/Logo'
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
    <div className={styles.body()}>
      <Logo />
      <Blocks blocks={page.blocks} params={params} />
    </div>
  )
}
