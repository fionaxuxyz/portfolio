import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CoverFrame } from '../components/Artwork'
import { ExternalLink } from '../components/Nav'
import { Inline, Prose } from '../components/Text'
import { getProject } from '../data/projects'
import { ui } from '../data/site'
import { useLanguage } from '../i18n'
import { listLines } from '../lib/text'

export function ProjectPage() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined
  const { locale, t } = useLanguage()
  const other = locale === 'zh' ? 'en' : 'zh'

  useEffect(() => {
    document.title = project ? `${t(project.title)} — Fiona` : `${t(ui.notFoundTitle)} — Fiona`
  }, [project, t])

  if (!project) {
    return (
      <div className="mx-auto max-w-[40rem] px-5 py-24 md:px-8">
        <h1 className="text-2xl font-semibold">{t(ui.notFoundTitle)}</h1>
        <p className="mt-3 text-sm leading-6 text-muted">{t(ui.notFoundBody)}</p>
        <Link to="/" className="mt-6 inline-block border-b border-lilac text-sm">
          {t(ui.home)}
        </Link>
      </div>
    )
  }

  const stackLabel = project.stackLabel === 'tools' ? ui.stackTools : ui.stack

  return (
    <article className="mx-auto max-w-[1180px] px-5 py-8 md:px-8 md:py-12">
      <Link to="/#works" className="text-sm font-semibold text-lilac">
        ← {t(ui.back)}
      </Link>
      <p className="mt-6 text-xs font-semibold tracking-[0.12em] text-lilac">{project.index}</p>
      <h1 className="mt-2 max-w-[16ch] text-3xl leading-tight font-bold tracking-[-0.04em] md:text-4xl">
        {t(project.title)}
      </h1>
      <p className="mt-2 text-sm text-lilac-deep">{project.title[other]}</p>
      <p className="mt-4 max-w-[40rem] text-sm leading-6">{t(project.lede)}</p>
      {project.links.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
          {project.links.map((link) => (
            <ExternalLink key={link.href} href={link.href} label={t(link.label)} />
          ))}
        </div>
      ) : null}

      {project.cover ? (
        <div className="mt-7">
          <CoverFrame
            cover={project.cover}
            alt={t(project.coverAlt)}
            tone={project.tone}
            priority
          />
        </div>
      ) : (
        <div className="panel mt-7 px-6 py-9 md:px-8 md:py-10">
          <p className="text-2xl font-bold tracking-[-0.035em] md:text-3xl">
            {locale === 'zh' ? '山塘街' : 'Shantang Street'}
          </p>
        </div>
      )}

      <div className="mt-9 max-w-[48rem]">
        <h2 className="text-xl leading-snug font-semibold tracking-[-0.02em] md:text-2xl">{t(project.storyTitle)}</h2>
        <div className="mt-4">
          <Prose paragraphs={project.story[locale]} />
        </div>

        {project.groups.map((group) => (
          <section key={group.title.en} className="mt-8">
            <h2 className="text-lg font-semibold text-lilac">{t(group.title)}</h2>
            <ul className="mt-3 border-t border-dashed border-line">
              {listLines(group, locale).map((line) => (
                <li key={line} className="border-b border-dashed border-line py-3 text-sm leading-6">
                  <Inline text={line} />
                </li>
              ))}
            </ul>
          </section>
        ))}

        <h2 className="mt-8 text-lg font-semibold text-lilac">{t(stackLabel)}</h2>
        <div className="mt-4 flex flex-wrap gap-2">{project.stack.split(' · ').map((item) => <code key={item} className="tech-label">{item}</code>)}</div>
        <p className="mt-8 border-t border-dashed border-lilac pt-4 text-sm leading-7 text-muted">
          {project.meta}
        </p>
        {project.links.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            {project.links.map((link) => (
              <ExternalLink key={`${link.href}-end`} href={link.href} label={t(link.label)} />
            ))}
          </div>
        ) : null}
      </div>
    </article>
  )
}
