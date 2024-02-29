import {fromModule} from '@/utils/styler/Styler'
import {HTMLAttributes, PropsWithChildren} from 'react'
import css from './Container.module.scss'

const styles = fromModule(css)

type ContainerProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export function Container(props: ContainerProps) {
  return <div {...props} className={styles.container.mergeProps(props)()} />
}
