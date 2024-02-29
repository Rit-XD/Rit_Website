import {BlockSchema} from '@/blocks/Block.schema'
import {HeroSchema} from '@/components/hero/Hero.schema'
import {Config, Field} from 'alinea'

export const HomeSchema = Config.document('Home', {
  fields: {
    title: Field.text('Title', {readOnly: true}),
    path: Field.path('Path', {readOnly: true, hidden: true, width: 0.5}),
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
  }
})
