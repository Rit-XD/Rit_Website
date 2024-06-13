import {Link} from '@/ui/Link'
import {Variant} from '@/utils/styler'
import {fromModule} from '@/utils/styler/Styler'
import React, {HTMLProps} from 'react'
import css from './Button.module.scss'

const styles = fromModule(css)

type ButtonType = (
  | Omit<HTMLProps<HTMLAnchorElement>, 'as'>
  | ({as: 'a'} & HTMLProps<HTMLAnchorElement>)
  | ({type: 'button' | 'submit'} & HTMLProps<HTMLButtonElement>)
) & {
  mod?: Variant<'dark'>
}
export const Button: React.FC<ButtonType> = ({mod, ...props}) => {
  let ButtonTag: any = Link
  if ('type' in props && props.type === ('button' || 'submit'))
    ButtonTag = 'button'

  return (
    <ButtonTag
      {...props}
      tabIndex={0}
      className={styles.button.mergeProps(props).mod(mod)()}
    >
      {props.children}
    </ButtonTag>
  )
}
