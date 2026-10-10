import { about } from '../data/about'
import { sectionTitles } from '../data/site'
import { useLanguage } from '../i18n'
import { Inline, Prose } from './Text'

export function About() {
  const { locale, t } = useLanguage()
  const other = locale === 'zh' ? 'en' : 'zh'

  return (
    <section id="about" className="scroll-mt-28 border-b border-line" aria-labelledby="about-title">
      <div className="mx-auto max-w-[1180px] px-5 py-10 md:px-8 md:py-14">
        <header className="max-w-[62rem]">
          <h2 id="about-title" className="text-2xl font-semibold tracking-[-0.035em] text-ink md:text-3xl">
            {t(sectionTitles.about)}
          </h2>
          <p className="mt-1 text-sm tracking-[0.08em] text-muted">{sectionTitles.about[other]}</p>
        </header>
        <div className="mt-4 max-w-[62rem] border-l-2 border-l-lilac pl-4 md:pl-5">
          <Prose paragraphs={about.paragraphs[locale]} />
        </div>

        <div className="mt-7 w-full">
          <h3 className="text-lg font-semibold md:text-xl">{t(about.tagsTitle)}</h3>
          <ul className="mt-3 divide-y divide-line border-y border-line">
            {about.tags[locale].map((tag) => (
              <li key={tag} className="w-full py-3 text-sm leading-6 md:px-2">
                <Inline text={tag} />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7 w-full">
          <h3 className="text-lg font-semibold md:text-xl">{t(about.interestsTitle)}</h3>
          <ul className="mt-3 divide-y divide-line border-y border-line">
            {about.interests[locale].map((item, index) => (
              <li key={item} className="grid w-full gap-2 py-3 text-sm leading-6 md:grid-cols-[3rem_1fr] md:px-2">
                <span className="block font-mono text-xs text-lilac-deep md:pt-1">
                  0{index + 1}
                </span>
                <span><Inline text={item} /></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
