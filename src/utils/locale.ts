export const locales: ('nl' | 'en')[] = ['nl', 'en']
export const defaultLocale = locales[0]
export type Locale = (typeof locales)[number]
