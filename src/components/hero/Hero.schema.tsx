import alinea from 'alinea'

export const HeroSchema = alinea.object('Hero', {
  fields: {
    title: alinea.text('Title', {multiline: true}),
    image: alinea.image('Image', {shared: true})
  }
})
