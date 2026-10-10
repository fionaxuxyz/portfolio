import { useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { defaultLocale, localeStorageKey, type Locale } from './config'
import type { Copy } from './types'
import { LanguageContext, type LanguageContextValue } from './language-context'

function readLocale(): Locale {
  try {
    const saved = localStorage.getItem(localeStorageKey)
    if (saved === 'zh' || saved === 'en') return saved
  } catch {
    /* private browsing */
  }
  return defaultLocale
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readLocale)

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(localeStorageKey, next)
    } catch {
      /* ignore */
    }
  }

  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
  }, [locale])

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      t: (copy: Copy) => copy[locale],
    }),
    [locale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const value = useContext(LanguageContext)
  if (!value) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return value
}
