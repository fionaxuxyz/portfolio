import { motion, useReducedMotion } from 'motion/react'
import { ArrowDownRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { hero, ui } from '../data/site'
import { useLanguage } from '../i18n'
import { Inline } from './Text'

export function Hero() {
  const { locale, t } = useLanguage()
  const reduce = useReducedMotion()

  return (
    <section className="border-b border-line" aria-labelledby="hero-title">
      <div className="mx-auto max-w-[1180px] px-5 py-10 md:px-8 md:py-14">
        <div className="grid items-center gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            id="hero-title"
            className="text-3xl leading-tight font-bold tracking-[-0.04em] text-ink sm:text-4xl"
          >
            <span>Hi, it's </span><br/><span className="text-lilac">Fiona! 💜</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-6 font-semibold tracking-[-0.015em] text-pink md:text-lg">
            {hero.subtitle}
          </p>
          <Link
            to="/#works"
            className="mt-6 inline-flex items-center gap-3 border border-lilac bg-lilac px-4 py-2.5 text-sm font-semibold text-paper hover:bg-transparent hover:text-lilac"
          >
            <span>{t(ui.worksLink)}</span>
            <ArrowDownRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </motion.div>

        <motion.div
          className="panel relative overflow-hidden p-5 md:p-6"
          initial={reduce ? false : { opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <span aria-hidden="true" className="absolute top-0 left-0 h-1.5 w-28 bg-pink" />
          <p className="text-sm leading-6 text-ink/90"><Inline text={hero.intro[locale]} /></p>
          <div className="mt-5 flex flex-wrap gap-2">
            {hero.tags.map((tag) => <code key={tag} className="tech-label">{tag}</code>)}
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}
