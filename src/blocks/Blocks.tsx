import {BlockSchema} from '@/blocks/Block.schema'
import {Text} from '@/blocks/text/Text'
import {Locale} from '@/utils/locale'
import {styler} from '@/utils/styler/Styler'
import {Infer} from 'alinea'
import React from 'react'
import {Splash} from './splash/Splash'
import {Partners} from './partners/Partners'

const styles = styler('blocks')

export type BlockProps = Infer<typeof BlockSchema>
export type ParamsType = {locale: Locale; slug: string[]}

export const Blocks: React.FC<{
  blocks: BlockProps[]
  params: ParamsType
  id?: string
  className?: string
}> = ({blocks, className, id, params}) => {
  if (!blocks || blocks.length === 0) return null

  return (
    <div id={id} className={styles.with(className)()}>
      {blocks.map(block => (
        <BlocksBlock block={block} params={params} key={block.id} />
      ))}
    </div>
  )
}

export async function BlocksBlock({
  block,
  params
}: {
  block: BlockProps
  params: ParamsType
}) {
  switch (block.type) {
    case 'Text':
      return <Text block={block} />
    case 'Partners':
      return <Partners block={block} />
    case 'Splash':
      return <Splash block={block} />
    default: {
      console.error(`No view found for block: ${block['type']}`)
      return null
    }
  }
}
