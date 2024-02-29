'use client'

import {Button} from '@/ui/Button'
import {Container} from '@/ui/Container'
import {WebText} from '@/ui/WebText'
import {Locale, defaultLocale} from '@/utils/locale'
import {fromModule} from '@/utils/styler/Styler'
import {Infer} from 'alinea'
import {usePathname} from 'next/navigation'
import React from 'react'
import css from './NotFound.module.scss'
import {NotFoundSchema} from './NotFound.shema'

const styles = fromModule(css)

function langSwitch(pathname: string) {
  switch (true) {
    case pathname.startsWith('/en'):
      return 'en'
    default:
      return 'nl'
  }
}

export const NotFoundClient: React.FC<{
  datas: Record<Locale, Infer<typeof NotFoundSchema>>
}> = ({datas}) => {
  const pathname = usePathname()
  const lang = langSwitch(pathname)
  const data = datas[lang] || datas[defaultLocale]
  const {title, text, button} = data

  return (
    <main className={styles.notfound()}>
      <Container>
        <div className={styles.notfound.content()}>
          {title && <h1>{title}</h1>}
          {text && (
            <WebText doc={text} className={styles.notfound.content.text()} />
          )}
          <Button
            href={button?.url || '/'}
            className={styles.notfound.content.button()}
          >
            {button?.label || button?.title || 'Home'}
          </Button>
        </div>
      </Container>
    </main>
  )
}
