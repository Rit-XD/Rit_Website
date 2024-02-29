import {BlockSchema} from '@/blocks/Block.schema'
import {Config, Field} from 'alinea'

export const PageSchema = Config.document('Page', {
  fields: {
    blocks: Field.list('Blocks', {
      schema: BlockSchema
    })
  }
})
