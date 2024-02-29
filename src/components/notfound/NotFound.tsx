import {cms} from '@/cms'
import {NotFoundSchema} from './NotFound.shema'
import {NotFoundClient} from './NotFoundClient'

export default async function NotFound() {
  const pageEn = await cms.locale('en').get(NotFoundSchema())
  const pageNl = await cms.locale('nl').get(NotFoundSchema())

  return <NotFoundClient datas={{en: pageEn, nl: pageNl}} />
}
