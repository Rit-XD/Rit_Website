import {Config, Field} from 'alinea'

export const PartnerSchema = Config.type('Partners', {
  fields: {
    title: Field.text('Title'),
    subtitle_left: Field.text('Subtitle left', {width: 0.5}),
    subtitle_right: Field.text('Subtitle right', {width: 0.5}),
    partners: Field.list('Partners', {
      schema: {
        Partner: Config.type('Partner', {
          fields: {
            position: Field.select('Position', {
              options: {left: 'Left', right: 'Right'},
              width: 0.25
            }),
            link: Field.link('Link', {width: 0.75}),
            image: Field.image('Image', {width: 0.5}),
            title: Field.text('Title', {multiline: true, width: 0.5})
          }
        })
      }
    })
  }
})
