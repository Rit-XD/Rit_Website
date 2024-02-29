import alinea from 'alinea'

export const FooterSchema = alinea.type('Footer', {
  fields: {
    title: alinea.text('Title', {hidden: true, readOnly: true}),
    path: alinea.path('Path', {hidden: true, readOnly: true}),
    description: alinea.richText('Description'),
    navigation: alinea.link.multiple('Navigation', {
      fields: {
        label: alinea.text('Label')
      }
    }),
    links: alinea.link.multiple('Links', {
      fields: {
        label: alinea.text('Label')
      }
    })
  }
})
