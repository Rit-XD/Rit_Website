'use client'

import {Image} from '@/ui/Image'
import {Locale} from '@/utils/locale'
import {fromModule} from 'alinea/ui'
import Link from 'next/link'
import React from 'react'
import logo from '../../../public/logo.svg'
import css from './Logo.module.scss'

const styles = fromModule(css)

type LogoProps = {
  className?: string
}

export const Logo: React.FC<LogoProps> = ({className}) => {
  return (
    <Link href={`/`} className={styles.logo.with(className)()}>
      <Image {...logo} alt="Rit" />
    </Link>
  )
}
