import {IcRoundArticle} from '@/components/alinea/IcRoundArticle'
import {Config, Field} from 'alinea'

export const TextSchema = Config.type('Text', {
  icon: IcRoundArticle,
  fields: {
    text: Field.richText('Text')
  }
})
