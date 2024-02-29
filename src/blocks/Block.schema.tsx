import {Config} from 'alinea'
import {PartnerSchema} from './partners/Partners.schema'
import {TextSchema} from './text/Text.schema'
import {SplashSchema} from './splash/Splash.schema'

export const BlockSchema = Config.schema({
  types: {
    Text: TextSchema,
    Partners: PartnerSchema,
    Splash: SplashSchema
  }
})
