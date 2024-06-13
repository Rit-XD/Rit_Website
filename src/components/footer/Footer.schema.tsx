import alinea, {Config, Field} from 'alinea'

export const FooterSchema = alinea.type('Footer', {
  fields: {
    title: alinea.text('Title', {hidden: true, readOnly: true}),
    path: alinea.path('Path', {hidden: true, readOnly: true}),
    navigation: Field.list('Navigation', {
      schema: {
        Item: Config.type('Item', {
          fields: {
            title: Field.link('Title', {
              fields: {
                label: Field.text('Label')
              }
            }),
            links: alinea.link.multiple('Links', {
              fields: {
                label: alinea.text('Label')
              }
            })
          }
        })
      }
    }),
    links: alinea.link.multiple('Links', {
      fields: {
        label: alinea.text('Label')
      }
    })
  }
})
