'use client'

import {Locale} from '@/utils/locale'
import {fetchTranslations} from '@/utils/translations/translations.actions'
import {usePathname} from 'next/navigation'
import {useEffect, useState} from 'react'

export function usePathnameTranslations() {
  const pathname = usePathname()
  const [pathTranslations, setPathTranslations] = useState<
    Record<string, Record<Locale, string>>
  >({})

  useEffect(() => {
    if (pathTranslations[pathname]) return
    fetchTranslations(pathname).then(res => {
      if (!res) return
      setPathTranslations({
        ...pathTranslations,
        [pathname]: res
      })
    })
  }, [pathTranslations, pathname])

  return (
    pathTranslations[pathname] || {
      nl: '/nl',
      en: '/en'
    }
  )
}
