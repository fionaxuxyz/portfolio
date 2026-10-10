import type { Locale } from './config'

export type Copy = Record<Locale, string>

export interface LinkCopy {
  href: string
  label: Copy
}

export interface NamedList {
  title: Copy
  /** Parallel bullets. Use when Chinese and English have the same count. */
  items?: Copy[]
  /** Full lists when the two languages are not line-aligned. */
  lines?: { zh: string[]; en: string[] }
}
