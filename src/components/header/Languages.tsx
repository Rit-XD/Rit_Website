'use client'

import {Icon} from '@/ui/Icon'
import {Locale, locales} from '@/utils/locale'
import {fromModule} from '@/utils/styler/Styler'
import {usePathnameTranslations} from '@/utils/translations/usePathnameTranslations'
import Link from 'next/link'
import React, {useState} from 'react'
import css from './Languages.module.scss'

const styles = fromModule(css)

type LangSwitchProps = {language: Locale}

export const Languages: React.FC<LangSwitchProps> = ({language}) => {
  const [open, setOpen] = useState<boolean>(false)
  const links = usePathnameTranslations()

  const currentLang = language
  const switchLangs = [
    {key: 'en', title: 'English'},
    {key: 'nl', title: 'Nederlands'}
  ] as const

  if (!locales.includes(currentLang)) return null

  return (
    <div>
      <div className={styles.lang()}>
        {switchLangs.map(
          lang =>
            currentLang !== lang.key && (
              <Link href={links[lang.key]} key={lang.key}>
                {lang.title}
              </Link>
            )
        )}
      </div>
      <div className={styles.langdesktop()}>
        <button
          onClick={() => setOpen(!open)}
          className={styles.langdesktop.button()}
        >
          {currentLang.toUpperCase()}
          <Icon
            className={styles.langdesktop.button.icon()}
            icon="IcArrowDown"
          />
        </button>
        {open && (
          <div role="menu" className={styles.langdesktop.menu()}>
            {switchLangs.map(
              lang =>
                currentLang !== lang.key && (
                  <Link
                    href={links[lang.key]}
                    className={styles.langdesktop.menu.item()}
                    key={lang.key}
                  >
                    {lang.key.toUpperCase()}
                  </Link>
                )
            )}
          </div>
        )}
      </div>
    </div>
  )
}
