import alinea from 'alinea'

export const HeaderSchema = alinea.type('Header', {
  fields: {
    title: alinea.text('Title', {hidden: true, readOnly: true}),
    path: alinea.path('Path', {hidden: true, readOnly: true}),
    navigation: alinea.link.multiple('Navigation', {
      fields: {
        label: alinea.text('Label')
      }
    })
  }
})
