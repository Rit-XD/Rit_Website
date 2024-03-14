import {Config, Field} from 'alinea'
import {Entry} from 'alinea/core'

export const HeaderSchema = Config.type('Header', {
  fields: {
    title: Field.text('Title', {multiline: true}),
    button: Field.entry('Button', {
      width: 0.5,
      condition: Entry.workspace.is('main').and(Entry.root.is('pages')),
      fields: {
        label: Field.text('Label')
      }
    })
  }
})
