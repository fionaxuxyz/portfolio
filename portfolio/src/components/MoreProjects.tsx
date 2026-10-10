import { useId, useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { practiceProjects } from '../data/engineering'
import { sectionTitles } from '../data/site'
import { ui } from '../data/site'
import { useLanguage } from '../i18n'
import { ExternalLink } from './Nav'
import { Inline, Prose, SectionHeading } from './Text'

export function MoreProjects() {
  const { locale, t } = useLanguage()
  const other = locale === 'zh' ? 'en' : 'zh'
  const [open, setOpen] = useState<string | null>(null)
  const baseId = useId()

  return (
    <section
      id="practice"
      className="scroll-mt-28 border-b border-line"
      aria-labelledby="practice-title"
    >
      <div className="mx-auto max-w-[1180px] px-5 py-10 md:px-8 md:py-14">
        <SectionHeading
          index="04"
          id="practice-title"
          title={t(sectionTitles.practice)}
          alternate={sectionTitles.practice[other]}
        />

        <div className="border border-line bg-card">
          {practiceProjects.map((project) => {
            const expanded = open === project.id
            const panelId = `${baseId}-${project.id}`
            const buttonId = `${panelId}-button`
            return (
              <article key={project.id} className="border-b border-line last:border-b-0">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => setOpen(expanded ? null : project.id)}
                    className="flex w-full items-start justify-between gap-6 px-5 py-4 text-left hover:bg-surface md:px-6"
                  >
                    <span>
                      <span className="mb-2 block text-xs font-semibold tracking-[0.16em] text-lilac-deep">
                        {project.index}
                      </span>
                      <span className="text-base leading-snug font-semibold md:text-lg">
                        {t(project.title)}
                      </span>
                      <span className="mt-2 block text-sm text-muted">{project.stack}</span>
                    </span>
                    {expanded ? (
                      <Minus aria-hidden="true" className="mt-1 h-5 w-5 shrink-0" />
                    ) : (
                      <Plus aria-hidden="true" className="mt-1 h-5 w-5 shrink-0" />
                    )}
                    <span className="sr-only">{expanded ? t(ui.collapse) : t(ui.expand)}</span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!expanded}
                >
                  <div className="max-w-[48rem] px-5 pb-6 md:px-6">
                    <Prose paragraphs={project.body[locale]} />
                    <p className="mt-4 text-sm leading-6">
                      <strong className="font-medium">
                        {locale === 'zh' ? '工程实践：' : 'Engineering: '}
                      </strong>
                      <Inline text={t(project.practice)} />
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">{project.stack.split(' · ').map((item) => <code key={item} className="tech-label">{item}</code>)}</div>
                    {project.link ? (
                      <div className="mt-5">
                        <ExternalLink href={project.link.href} label={t(project.link.label)} />
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
