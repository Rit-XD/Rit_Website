import {Image} from '@/ui/Image'
import {Title} from '@/ui/Title'
import {fromModule} from '@/utils/styler/Styler'
import {Infer} from 'alinea'
import css from './Hero.module.scss'
import {HeroSchema} from './Hero.schema'

const styles = fromModule(css)

type HeroProps = Infer<typeof HeroSchema>

export const Hero: React.FC<HeroProps> = ({image, title}) => {
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
