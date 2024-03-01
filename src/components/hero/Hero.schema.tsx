import {Field} from 'alinea'

export const HeroSchema = Field.object('Hero', {
  fields: {
    title: Field.text('Title', {multiline: true}),
    image: Field.image('Image', {shared: true})
  }
})
