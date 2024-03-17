import {BlockSchema} from '@/blocks/Block.schema'
import {Partners} from '@/blocks/partners/Partners'
import {Splash} from '@/blocks/splash/Splash'
import {Text} from '@/blocks/text/Text'
import {styler} from '@/utils/styler/Styler'
import {Infer} from 'alinea'
import {ListRow} from 'alinea/core/shape/ListShape'
import React from 'react'
import {Advantages} from './advantages/Advantages'
import {Cta} from './cta/Cta'

const styles = styler('blocks')

export type BlockProps = Infer<typeof BlockSchema> & ListRow
export type ParamsType = {locale: string; slug: string[]}

export const Blocks: React.FC<{
  blocks: BlockProps[]
  params: ParamsType
  id?: string
  className?: string
}> = ({blocks, className, id, params}) => {
  if (!blocks || blocks.length === 0) return null

  return (
    <div id={id} className={styles.with(className)()}>
      {blocks.map(block => {
        return <BlocksBlock block={block} params={params} key={block._id} />
      })}
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
  switch (block._type) {
    case 'Text':
      return <Text block={block} />
    case 'Partners':
      return <Partners block={block} />
    case 'Splash':
      return <Splash block={block} />
    case 'Advantages':
      return <Advantages block={block} />
    case 'Cta':
      return <Cta block={block} />
    default: {
      console.error(`No view found for block: ${block['type']}`)
      return null
    }
  }
}
