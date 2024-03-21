import {Button} from '@/ui/Button'
import {Container} from '@/ui/Container'
import {Image} from '@/ui/Image'
import {fromModule} from '@/utils/styler/Styler'
import {Infer} from 'alinea'
import css from './Cta.module.scss'
import {CtaSchema} from './Cta.schema'

const styles = fromModule(css)

type CtaProps = Infer<typeof CtaSchema>

export function Cta({block}: {block: CtaProps}) {
  const {title, description, button, image} = block

  return (
    <Container>
      <div className={styles.cta()}>
        <div className={styles.cta.content()}>
          {title && <h2 className={styles.cta.content.title()}>{title}</h2>}
          {description && (
            <p className={styles.cta.content.description()}>{description}</p>
          )}
          <Button className={styles.cta.content.button()}>
            {button?.fields.label}
          </Button>
        </div>
        {image?.src && (
          <div className={styles.cta.image()}>
            <Image {...image} sizes="100vw" />
          </div>
        )}
      </div>
    </Container>
  )
}
