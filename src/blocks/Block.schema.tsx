import {Config} from 'alinea'
import {AdvantageSchema} from './advantages/Advantages.schema'
import {PartnerSchema} from './partners/Partners.schema'
import {SplashSchema} from './splash/Splash.schema'
import {TextSchema} from './text/Text.schema'

export const BlockSchema = Config.schema({
  types: {
    Text: TextSchema,
    Partners: PartnerSchema,
    Splash: SplashSchema,
    Advantages: AdvantageSchema
  }
})
