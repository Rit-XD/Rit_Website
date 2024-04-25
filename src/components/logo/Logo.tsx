'use client'

import {Image} from '@/ui/Image'
import {Locale} from '@/utils/locale'
import {fromModule} from 'alinea/ui'
import React from 'react'
import logo from '../../../public/logo.svg'
import css from './Logo.module.scss'

const styles = fromModule(css)

type LogoProps = {
  className?: string
  language?: Locale
}

export const Logo: React.FC<LogoProps> = ({className}) => {
  return (
    <>
      <Image {...logo} alt="Rit" />
      <p className={styles.logo.label()}>Revolution in Transport.</p>
    </>
  )
}
