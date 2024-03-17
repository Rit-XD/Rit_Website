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
        {title && <h2 className={styles.cta.title()}>{title}</h2>}
        {description && (
          <p className={styles.cta.description()}>{description}</p>
        )}
        <Button className={styles.cta.button()}>{button?.fields.label}</Button>
        {image?.src && (
          <div className={styles.cta.image()}>
            <Image {...image} sizes="100vw" />
          </div>
        )}
      </div>
    </Container>
  )
}
