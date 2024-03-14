import {Field} from 'alinea'
import {Entry} from 'alinea/core'

export const HeroSchema = Field.object('Hero', {
  fields: {
    image: Field.image('Image', {shared: true}),
    title: Field.text('Title', {multiline: true}),
    button: Field.entry('Button', {
      condition: Entry.workspace.is('main').and(Entry.root.is('pages')),
      fields: {
        label: Field.text('Label')
      }
    })
  }
})
