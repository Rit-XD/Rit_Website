import {Logo} from '@/components/logo/Logo'
import {Button} from '@/ui/Button'
import {Container} from '@/ui/Container'
import {Image} from '@/ui/Image'
import {Title} from '@/ui/Title'
import {fromModule} from '@/utils/styler/Styler'
import {Infer} from 'alinea'
import css from './Hero.module.scss'
import {HeroSchema} from './Hero.schema'

const styles = fromModule(css)

type HeroProps = Infer<typeof HeroSchema>

export const Hero: React.FC<HeroProps> = ({image, title, button}) => {
  return (
    <div className={styles.hero()}>
      {image?.src && <Image {...image} fill sizes="100vw" alt="Hero" />}
      <div className={styles.hero.content()}>
        <Container>
          <div className={styles.hero.content.flex()}>
            <Logo className={styles.hero.content.logo()} />
            {title && (
              <Title.H3
                as="h1"
                mod="inherit"
                className={styles.hero.content.title()}
              >
                {title}
              </Title.H3>
            )}
            {button?.href && (
              <Button>{button.fields.label || button.title}</Button>
            )}
          </div>
        </Container>
      </div>
    </div>
  )
}
