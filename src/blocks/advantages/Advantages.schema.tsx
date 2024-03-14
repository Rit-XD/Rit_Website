import {Config, Field} from 'alinea'

export const AdvantageSchema = Config.type('Advantages', {
  fields: {
    title: Field.text('Title', {width: 0.5}),
    image: Field.image('Image', {width: 0.5}),
    advantages: Field.list('Advantages', {
      schema: {
        Advantage: Config.type('Advantage', {
          fields: {
            icon: Field.image('Icon', {width: 0.5}),
            description: Field.text('Description', {
              multiline: true,
              width: 0.5
            })
          }
        })
      }
    })
  }
})
