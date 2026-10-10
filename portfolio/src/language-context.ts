import { createContext } from 'react'
import type { Locale } from './config'
import type { Copy } from './types'

export interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (copy: Copy) => string
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
