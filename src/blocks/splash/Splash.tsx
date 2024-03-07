import {Button} from '@/ui/Button'
import {Title} from '@/ui/Title'
import {fromModule} from '@/utils/styler/Styler'
import {Infer} from 'alinea'
import css from './Splash.module.scss'
import {SplashSchema} from './Splash.schema'

const styles = fromModule(css)

type SplashProps = Infer<typeof SplashSchema>

export function Splash({block}: {block: SplashProps}) {
  const {title, text, button_left, button_right} = block
  return (
    <div>
      {title && <Title.H1>{title}</Title.H1>}
      {text && <p>{text}</p>}
      {button_left && (
        <Button href={button_left?.url || '/'}>
          {button_left?.label || button_left?.title || 'Zorgcentra'}
        </Button>
      )}
      {button_right && (
        <Button href={button_right?.url || '/'}>
          {button_right?.label || button_right?.title || 'Vrijwilligers'}
        </Button>
      )}
    </div>
  )
}
