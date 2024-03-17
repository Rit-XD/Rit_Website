import {Config, Field} from 'alinea'

export const PartnerSchema = Config.type('Partners', {
  fields: {
    title: Field.text('Title', {width: 0.5}),
    image: Field.image('Image', {width: 0.5}),
    partners: Field.list('Partners', {
      schema: {
        Partners: Config.type('Partner', {
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
