'use client'

import {FooterSchema} from '@/components/footer/Footer.schema'
import {Container} from '@/ui/Container'
import {WebText} from '@/ui/WebText'
import {Locale} from '@/utils/locale'
import {fromModule} from '@/utils/styler/Styler'
import {Infer} from 'alinea'
import Link from 'next/link'
import React from 'react'
import {Navigation} from '../header/Navigation'
import {Logo} from '../logo/Logo'
import css from './Footer.module.scss'

const styles = fromModule(css)

type FooterProps = {data: Infer<typeof FooterSchema>; language: Locale}

export const Footer: React.FC<FooterProps> = ({data, language}) => {
  const {links} = data

  return (
    <Container>
      <footer className={styles.footer()}>
        <div>
          <Logo language={language} />
          {links?.length > 0 && (
            <div className={styles.footer.links()}>
              {links.map((link, index) => {
                return (
                  <Link
                    className={styles.footer.links.link()}
                    href={link.url}
                    key={index}
                  >
                    {link.label || link.title || link.url}
                  </Link>
                )
              })}
            </div>
          )}
        </div>
        <WebText
          className={styles.footer.description()}
          doc={data.description}
        />
        <Navigation
          className={styles.footer.navigation()}
          navigation={data.navigation}
        />
      </footer>
    </Container>
  )
}
