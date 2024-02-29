import {Config, Field} from 'alinea'
import {Entry} from 'alinea/core'

export const NotFoundSchema = Config.document('Not found', {
  fields: {
    path: Field.path('Path', {readOnly: true, width: 0.5}),
    text: Field.richText('Text'),
    button: Field.entry('Button', {
      condition: Entry.workspace.is('main').and(Entry.root.is('pages')),
      fields: {
        label: Field.text('Label')
      }
    })
  }
})
