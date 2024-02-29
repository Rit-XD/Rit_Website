'use client'

import {Container} from '@/ui/Container'
import {Locale} from '@/utils/locale'
import {Infer} from 'alinea'
import {fromModule} from 'alinea/ui'
import React, {useState} from 'react'
import {Logo} from '../logo/Logo'
import {Hamburger} from './Hamburger'
import css from './Header.module.scss'
import {HeaderSchema} from './Header.schema'
import {Languages} from './Languages'
import {Mobilenav} from './Mobilenav'
import {Navigation} from './Navigation'

const styles = fromModule(css)

export type HeaderProps = {data: Infer<typeof HeaderSchema>; language: Locale}

export const Header: React.FC<HeaderProps> = ({language, data}) => {
  const [openMobilemenu, setMobilemenu] = useState<boolean>(false)

  return (
    <header className={styles.header()}>
      <Container>
        <div className={styles.header.row()}>
          <Logo />

          <div className={styles.header.row.right()}>
            <Languages language={language} />
          </div>
        </div>
        <div className={styles.header.ipad()}></div>
      </Container>
    </header>
  )
}
