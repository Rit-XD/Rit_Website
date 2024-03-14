'use client'

import {styler} from '@/utils/styler/Styler'
import {HTMLProps, useRef} from 'react'
import {BlockProps} from './Blocks'

const styles = styler('block')

type Props = HTMLProps<HTMLDivElement> & {
  type?: BlockProps['_type']
}

export const Block = ({children, type, ...props}: Props) => {
  const blockRef = useRef<HTMLDivElement>(null)
  const typeLowerCase = type && type.toLowerCase()

  return (
    <section
      {...props}
      ref={blockRef}
      className={styles.with(typeLowerCase).with(props.className)()}
    >
      {children}
    </section>
  )
}
