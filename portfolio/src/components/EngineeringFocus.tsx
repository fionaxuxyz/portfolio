import { focusAreas } from '../data/engineering'
import { sectionTitles } from '../data/site'
import { useLanguage } from '../i18n'
import { Prose, SectionHeading } from './Text'

export function EngineeringFocus() {
  const { locale, t } = useLanguage()
  const other = locale === 'zh' ? 'en' : 'zh'

  return (
    <section id="focus" className="scroll-mt-28 border-b border-line" aria-labelledby="focus-title">
      <div className="mx-auto max-w-[1180px] px-5 py-10 md:px-8 md:py-14">
        <SectionHeading
          index="05"
          id="focus-title"
          title={t(sectionTitles.focus)}
          alternate={sectionTitles.focus[other]}
        />
        <div className="space-y-3">
          {focusAreas.map((area) => (
            <article
              key={area.index}
              className="focus-card grid w-full gap-5 border border-dashed border-lilac bg-card p-5 md:p-6 lg:grid-cols-[0.3fr_0.48fr_0.22fr] lg:items-start"
            >
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-lilac-deep">
                  <span aria-hidden="true">{area.mark} </span>
                  {area.index}
                </p>
                <h3 className="mt-2 text-lg leading-snug font-semibold text-ink md:text-xl">
                  {area.title.zh}
                  <span className="mt-1 block text-sm font-normal tracking-wide text-lilac-deep">
                    {area.title.en}
                  </span>
                </h3>
              </div>
              <div>
                <Prose paragraphs={area.body[locale]} />
              </div>
              <div className="flex flex-wrap content-start gap-2 border-t border-line pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-5">
                {area.stack.map((item) => <code key={item} className="tech-label">{item}</code>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
