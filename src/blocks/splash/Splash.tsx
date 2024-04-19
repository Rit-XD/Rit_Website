import {Logo} from '@/components/logo/Logo'
import {Button} from '@/ui/Button'
import {Container} from '@/ui/Container'
import {Image} from '@/ui/Image'
import {fromModule} from '@/utils/styler/Styler'
import {Infer} from 'alinea'
import css from './Splash.module.scss'
import {SplashSchema} from './Splash.schema'

const styles = fromModule(css)

type SplashProps = Infer<typeof SplashSchema>

export function Splash({block}: {block: SplashProps}) {
  const {image, title, text, button_left, button_right} = block
  return (
    <div className={styles.splash()}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image {...image} fill sizes="100vw" style={{objectFit: 'cover'}} />
      <span className={styles.splash.overlay1()} />
      <span className={styles.splash.overlay2()} />
      <div className={styles.splash.logo()}>
        <Container>
          <Logo />
        </Container>
      </div>
      <div className={styles.splash.flex()}>
        <Container>
          <div className={styles.splash.content()}>
            {title && <h1>{title}</h1>}
            {text && <p>{text}</p>}
            <div className={styles.splash.content.buttons()}>
              {button_left && (
                <Button href={button_left?.href || '/'}>
                  {button_left?.fields.label ||
                    button_left?.title ||
                    'Zorgcentra'}
                </Button>
              )}
              {button_right && (
                <Button href={button_right?.href || '/'}>
                  {button_right?.fields.label ||
                    button_right?.title ||
                    'Vrijwilligers'}
                </Button>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
