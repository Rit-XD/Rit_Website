import css from '@/blocks/advantages/Advantages.module.scss'
import {AdvantageSchema} from '@/blocks/advantages/Advantages.schema'
import {Container} from '@/ui/Container'
import {Image} from '@/ui/Image'
import {fromModule} from '@/utils/styler/Styler'
import {Infer} from 'alinea'

const styles = fromModule(css)

type AdvantagesData = Infer<typeof AdvantageSchema>

export function Advantages({block}: {block: AdvantagesData}) {
  const {title, image, advantages} = block

  return (
    <Container>
      <h2 className={styles.title()}>{title}</h2>
      <div className={styles.advantages()}>
        {image?.src && (
          <div className={styles.advantages.image()}>
            <Image
              width={769}
              height={576}
              sizes="(max-width: 1024px) 100vw, 50vw"
              src={image.src}
            />
          </div>
        )}
        <ul className={styles.advantages.list()}>
          {advantages.map((advantage, index) => (
            <li key={index} className={styles.advantages.item()}>
              {advantage.icon?.src && (
                <div className={styles.advantages.item.icon()}>
                  <Image width={34} height={26} src={advantage.icon.src} />
                </div>
              )}
              <p className={styles.advantages.item.description()}>
                {advantage.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
