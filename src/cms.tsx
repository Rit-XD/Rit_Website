import {IcRoundSettings} from '@/components/alinea/IcRoundSettings'
import {FooterSchema} from '@/components/footer/Footer.schema'
import {HeaderSchema} from '@/components/header/Header.schema'
import {HomeSchema} from '@/pagetypes/home/Home.schema'
import {PageSchema} from '@/pagetypes/page/Page.schema'
import {Config, Field} from 'alinea'
import {createCMS} from 'alinea/next'
import {NotFoundSchema} from './components/notfound/NotFound.schema'

const Page = Config.type('Page', {
  fields: {
    title: Field.text('Title'),
    path: Field.path('Path')
  }
})

const locales = ['nl', 'en']

export const cms = createCMS({
  dashboard: {
    dashboardUrl: process.env.NODE_ENV === 'development' ? '/' : '/admin.html',
    handlerUrl: '/api/cms',
    staticFile: 'public/admin.html'
  },
  preview: process.env.NEXT_PUBLIC_APP_URL + '/api/preview',
  schema: {
    // Pages
    Home: HomeSchema,
    Page: PageSchema,

    // General
    Header: HeaderSchema,
    Footer: FooterSchema,
    NotFound: NotFoundSchema
  },
  workspaces: {
    main: Config.workspace('Rit', {
      color: '#13bc95',
      source: 'content',
      mediaDir: 'public',
      roots: {
        pages: Config.root('Pages', {
          contains: ['Page'],
          entries: {
            index: Config.page(HomeSchema({title: 'Homepage'}))
          },
          i18n: {locales}
        }),
        general: Config.root('General', {
          contains: ['Header', 'Footer', 'NotFound'],
          icon: IcRoundSettings,
          entries: {
            header: Config.page(HeaderSchema({title: 'Header'})),
            footer: Config.page(FooterSchema({title: 'Footer'})),
            'not-found': Config.page(NotFoundSchema({title: 'Page not found'}))
          },
          i18n: {locales}
        }),
        media: Config.media()
      }
    })
  }
})
