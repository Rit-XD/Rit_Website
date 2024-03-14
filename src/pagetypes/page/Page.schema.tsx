import {BlockSchema} from '@/blocks/Block.schema'
import {HeroSchema} from '@/components/hero/Hero.schema'
import {Config, Field} from 'alinea'

export const PageSchema = Config.document('Page', {
  ...Field.tabs(
    Field.tab('Hero', {
      fields: {
        hero: HeroSchema
      }
    }),
    Field.tab('Blocks', {
      fields: {
        blocks: Field.list('Blocks', {
          schema: BlockSchema
        })
      }
    })
  )
})
