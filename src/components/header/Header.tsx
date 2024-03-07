'use client'

import {Container} from '@/ui/Container'
import {Locale} from '@/utils/locale'
import {Infer} from 'alinea'
import {fromModule} from 'alinea/ui'
import React from 'react'
import {Logo} from '../logo/Logo'
import css from './Header.module.scss'
import {HeaderSchema} from './Header.schema'
import {Languages} from './Languages'

const styles = fromModule(css)

export type HeaderProps = {data: Infer<typeof HeaderSchema>; language: Locale}

export const Header: React.FC<HeaderProps> = ({language, data}) => {
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
