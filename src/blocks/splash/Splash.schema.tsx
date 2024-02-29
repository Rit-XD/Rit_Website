import {Config, Field} from 'alinea'
import alinea from 'alinea'
import {Entry} from 'alinea/core'

export const SplashSchema = alinea.object('Splash', {
  fields: {
    title: alinea.text('Title', {multiline: true}),
    text: alinea.text('Text'),
    image: alinea.image('Image', {shared: true}),
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
