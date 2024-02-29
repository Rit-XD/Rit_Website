import {Block} from '@/blocks/Block'
import {Container} from '@/ui/Container'
import {Image} from '@/ui/Image'
import {Title} from '@/ui/Title'
import {fromModule} from '@/utils/styler/Styler'
import {Infer} from 'alinea'
import Link from 'next/link'
import css from './Partners.module.scss'
import {PartnerSchema} from './Partners.schema'

const styles = fromModule(css)

type PartnersData = Infer<typeof PartnerSchema>

export function Partners({block}: {block: PartnersData}) {
  const {title, subtitle_left, subtitle_right, partners} = block

  return (
    <Block className={styles.partners()}>
      <Container>
        <div className={styles.partners.content()}>
          <Title.H4>{title}</Title.H4>
          <div className={styles.partners.content.flex()}>
            <div className={styles.partners.content.left()}>
              <h5 className={styles.partners.content.subtitle()}>
                {subtitle_left}
              </h5>
              <ul className={styles.partners.content.list()}>
                {partners
                  .filter(partner => partner?.position === 'left')
                  .map((partner, index) => (
                    <li key={index}>
                      <Link
                        className={styles.partners.content.image()}
                        href={partner.link.url}
                      >
                        {partner.image?.src && (
                          // eslint-disable-next-line jsx-a11y/alt-text
                          <Image {...partner.image} sizes="120px" />
                        )}
                        {partner.title && <p>{partner.title}</p>}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div className={styles.partners.content.right()}>
              <h5 className={styles.partners.content.subtitle()}>
                {subtitle_right}
              </h5>
              <ul className={styles.partners.content.list()}>
                {partners
                  .filter(partner => partner?.position === 'right')
                  .map((partner, index) => (
                    <li key={index}>
                      <Link
                        className={styles.partners.content.image()}
                        href={partner.link.url}
                      >
                        {partner?.image?.src && (
                          <Image
                            {...partner.image}
                            alt={partner.title}
                            sizes="120px"
                          />
                        )}
                        {partner.title && <p>{partner.title}</p>}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Block>
  )
}
