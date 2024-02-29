import {locales} from '@/utils/locale'
import {headers} from 'next/headers'
import {redirect} from 'next/navigation'

export default function LanguagePicker() {
  const acceptLanguage = headers().get('accept-language')
  const accepted = acceptLanguage?.split(',').map(l => l.toLowerCase()) ?? []
  for (const acceptedLanguage of accepted)
    for (const locale of locales)
      if (acceptedLanguage.startsWith(locale)) return redirect(`/${locale}`)
  redirect(`/${locales[0]}`)
}
