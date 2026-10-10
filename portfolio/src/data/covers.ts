import kitchen from '../../../assets/kitchen-cover.png'
import together from '../../../assets/together-cover.png'
import wisespend from '../../../assets/wisespend-cover.png'

export const covers = {
  wisespend,
  kitchen,
  together,
} as const

export type CoverId = keyof typeof covers
