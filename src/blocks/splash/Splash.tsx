import {Button} from '@/ui/Button'
import {fromModule} from '@/utils/styler/Styler'
import {Infer} from 'alinea'
import css from './Splash.module.scss'
import {SplashSchema} from './Splash.schema'

const styles = fromModule(css)

type SplashProps = Infer<typeof SplashSchema>

export function Splash({block}: {block: SplashProps}) {
  const {title, text, button_left, button_right} = block
  return (
    <div className={styles.splash()}>
      {title && <h1>{title}</h1>}
      {text && <p>{text}</p>}
      <div className={styles.splash.buttons()}>
        {button_left && (
          <Button href={button_left?.href || '/'}>
            {button_left?.fields.label || button_left?.title || 'Zorgcentra'}
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
  )
}
