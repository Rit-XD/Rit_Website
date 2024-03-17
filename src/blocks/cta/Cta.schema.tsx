import {Config, Field} from 'alinea'
import {Entry} from 'alinea/core'

export const CtaSchema = Config.type('Cta', {
  fields: {
    title: Field.text('Title', {multiline: true}),
    description: Field.text('Description', {multiline: true}),
    button: Field.entry('Button', {
      condition: Entry.workspace.is('main').and(Entry.root.is('pages')),
      fields: {
        label: Field.text('Label')
      }
    }),
    image: Field.image('Image', {shared: true})
  }
})
