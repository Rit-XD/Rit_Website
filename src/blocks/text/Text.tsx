import {Block} from '@/blocks/Block'
import {Container} from '@/ui/Container'
import {WebText} from '@/ui/WebText'
import {Infer} from 'alinea'
import {TextSchema} from './Text.schema'

type TextData = Infer<typeof TextSchema>

export function Text({block}: {block: TextData}) {
  const {text} = block
  if (!text || text.length === 0) return null

  return (
    <Block>
      <Container>
        <WebText doc={text} />
      </Container>
    </Block>
  )
}
