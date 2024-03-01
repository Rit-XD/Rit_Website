import {Config, Field} from 'alinea'
import {Entry} from 'alinea/core'

export const SplashSchema = Config.type('Splash', {
  fields: {
    title: Field.text('Title', {multiline: true}),
    text: Field.text('Text'),
    image: Field.image('Image', {shared: true}),
    button_left: Field.entry('Button', {
      width: 0.5,
      condition: Entry.workspace.is('main').and(Entry.root.is('pages')),
      fields: {
        label: Field.text('Label')
      }
    }),
    button_right: Field.entry('Button', {
      width: 0.5,
      condition: Entry.workspace.is('main').and(Entry.root.is('pages')),
      fields: {
        label: Field.text('Label')
      }
    })
  }
})
