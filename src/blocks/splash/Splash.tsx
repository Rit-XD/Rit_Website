import {Image} from '@/ui/Image'
import {Title} from '@/ui/Title'
import {fromModule} from '@/utils/styler/Styler'
import {Infer} from 'alinea'
import css from './Splash.module.scss'
import {SplashSchema} from './Splash.schema'

const styles = fromModule(css)

type SplashProps = Infer<typeof SplashSchema>

export function Splash({block}: {block: SplashProps}) {
  const {image, title} = block
  return (
    <div>
      {title && <Title.H1 className={styles.hero.title()}>{title}</Title.H1>}
      {image?.src && (
        <div className={styles.hero.content.image()}>
          <Image {...image} sizes="100vw" />
        </div>
      )}
    </div>
  )
}
