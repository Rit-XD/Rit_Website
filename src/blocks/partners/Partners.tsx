import css from '@/blocks/partners/Partners.module.scss'
import {Container} from '@/ui/Container'
import {Image} from '@/ui/Image'
import {fromModule} from '@/utils/styler/Styler'
import {Infer} from 'alinea'
import {PartnerSchema} from './Partners.schema'

const styles = fromModule(css)

type PartnersData = Infer<typeof PartnerSchema>

export function Partners({block}: {block: PartnersData}) {
  const {title, image, partners} = block

  return (
    <Container className={styles.background()}>
      <h2 className={styles.title()}>{title}</h2>
      <div className={styles.partners()}>
        <ul className={styles.partners.list()}>
          {partners.map((partner, index) => (
            <li key={index} className={styles.partners.item()}>
              {partner.icon?.src && (
                <div className={styles.partners.item.icon()}>
                  <Image width={64} height={56} src={partner.icon.src} />
                </div>
              )}
              <p className={styles.partners.item.description()}>
                {partner.description}
              </p>
            </li>
          ))}
        </ul>
        {image?.src && (
          <div className={styles.partners.image()}>
            <Image
              width={769}
              height={576}
              sizes="(max-width: 1024px) 100vw, 50vw"
              src={image.src}
            />
          </div>
        )}
      </div>
    </Container>
  )
}
