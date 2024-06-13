'use client'

import {FooterSchema} from '@/components/footer/Footer.schema'
import {Button} from '@/ui/Button'
import {Image} from '@/ui/Image'
import {Locale, defaultLocale, locales} from '@/utils/locale'
import {fromModule} from '@/utils/styler/Styler'
import {Infer} from 'alinea'
import Link from 'next/link'
import React from 'react'
import logo from '../../../public/logo-primary.svg'
import css from './Footer.module.scss'

const styles = fromModule(css)

type FooterProps = {data: Infer<typeof FooterSchema>; locale: Locale}

export const Footer: React.FC<FooterProps> = ({data, locale}) => {
  const homeHref = locales.includes(locale) ? `/${locale}` : `/${defaultLocale}`
  const {links, navigation} = data

  console.log(data)

  return (
    <footer className={styles.footer()}>
      <div>
        <Link className={styles.footer.logo()} href={homeHref} title="Rit">
          <Image {...logo} alt="Rit" />
          <p className={styles.logo.label()}>Revolution in Transport.</p>
        </Link>
        {navigation?.length > 0 && (
          <nav className={styles.footer.navigation()}>
            {navigation.map((item, index) => {
              return (
                <div className={styles.footer.navigation.item()}>
                  <div>
                    <Link
                      className={styles.footer.navigation.item.title()}
                      href={item.title.href}
                      key={index}
                    >
                      {item.title.fields.label ||
                        item.title.title ||
                        item.title.href}
                    </Link>
                  </div>
                  <div>
                    {item.links.map((link, index) => {
                      return (
                        <Link
                          className={styles.footer.navigation.item.link()}
                          href={link.href}
                          key={index}
                        >
                          {link.fields.label || link.title || link.href}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </nav>
        )}
        {links?.length > 0 && (
          <div className={styles.footer.links()}>
            {links.map((link, index) => {
              return (
                <Button
                  mod={'dark'}
                  className={styles.footer.links.link()}
                  href={link.href}
                  key={index}
                >
                  {link.fields.label || link.title || link.href}
                </Button>
              )
            })}
          </div>
        )}
        <p className={styles.footer.copy()}>
          &copy; Rit {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
