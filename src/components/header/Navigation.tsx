'use client'
import {Variant} from '@/utils/styler'
import {fromModule} from '@/utils/styler/Styler'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import React from 'react'
import {HeaderProps} from './Header'
import css from './Navigation.module.scss'

const styles = fromModule(css)

type NavigationProps = {
  navigation: HeaderProps['data']['navigation']
  className?: string
  mod?: Variant<'ipad' | 'desktop'>
}
export const Navigation: React.FC<NavigationProps> = ({
  navigation,
  className,
  mod
}) => {
  const pathname = usePathname()
  if (!navigation || navigation.length === 0) return null

  return (
    <nav className={styles.navigation.mod(mod).with(className)()}>
      <ul className={styles.navigation.items()}>
        {navigation.map((item, index) => {
          const isActive = pathname === item.href
          return (
            <li
              className={styles.navigation.items.item.is({
                active: isActive
              })()}
              key={index}
            >
              <Link href={item.href}>{item.fields.label || item.title}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
