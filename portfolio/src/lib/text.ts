import type { Locale } from '../config'
import type { NamedList } from '../types'

export function listLines(group: NamedList, locale: Locale) {
  if (group.lines) return group.lines[locale]
  return (group.items ?? []).map((item) => item[locale])
}

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
