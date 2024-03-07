'use client'

import {Image} from '@/ui/Image'
import {Locale} from '@/utils/locale'
import {fromModule} from 'alinea/ui'
import Link from 'next/link'
import React from 'react'
import logo from '../../../public/rit.svg'
import css from './Logo.module.scss'

const styles = fromModule(css)

type LogoProps = {
  className?: string
  language?: Locale
}

export const Logo: React.FC<LogoProps> = ({className}) => {
  return (
    <div className={styles.container()}>
      <Link href={`/`} className={styles.logo.with(className)()}>
        <div className={styles.logoContainer()}>
          <Image {...logo} alt="Rit" />
          <p>Revolution in Transport.</p>
        </div>
      </Link>
    </div>
  )
}
