import { Mail } from 'lucide-react'
import { closing, contact, education, sectionTitles } from '../data/site'
import { useLanguage } from '../i18n'
import { Prose, SectionHeading } from './Text'

function GithubMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.2 3.4 9.6 8.1 11.2.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.4-1.3-5.4-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.7-2.8 5.7-5.4 6 .4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6a11.5 11.5 0 0 0 8.1-11.2A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  )
}

export function EducationContact() {
  const { locale, t } = useLanguage()
  const other = locale === 'zh' ? 'en' : 'zh'

  return (
    <section id="contact" className="scroll-mt-28">
      <div className="mx-auto grid max-w-[1180px] gap-7 px-5 py-10 md:grid-cols-2 md:px-8 md:py-14">
        <div>
          <SectionHeading
            index="06"
            title={t(sectionTitles.education)}
            alternate={sectionTitles.education[other]}
          />
          <ol className="space-y-4">
            {education.map((item) => (
              <li key={item.school.en} className="panel p-4">
                <p className="text-base leading-tight font-semibold md:text-lg">{t(item.school)}</p>
                <p className="mt-1 text-sm text-muted">{item.school[other]}</p>
                <p className="mt-2 text-sm">{t(item.degree)}</p>
                <p className="text-sm text-muted">{item.degree[other]}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="panel p-5 md:p-6">
          <h2 id="contact-title" className="text-2xl font-semibold tracking-[-0.035em] md:text-3xl">
            {t(contact.title)}
          </h2>
          <p className="mt-2 text-sm tracking-[0.14em] text-muted uppercase">{contact.title[other]}</p>
          <div className="mt-5 max-w-[36rem]">
            <Prose paragraphs={contact.paragraphs[locale]} />
          </div>
          <ul className="mt-5 space-y-3">
            <li>
              <a
                href={contact.links[0].href}
                className="inline-flex items-center gap-3 border border-line bg-surface px-4 py-2.5 text-sm hover:border-lilac"
                target="_blank"
                rel="noreferrer noopener"
              >
                <GithubMark />
                {t(contact.links[0].label)}
              </a>
            </li>
            <li>
              <a href={contact.links[1].href} className="inline-flex items-center gap-3 border border-line bg-surface px-4 py-2.5 text-sm hover:border-lilac">
                <Mail aria-hidden="true" className="h-5 w-5" />
                {t(contact.links[1].label)}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export function Closing() {
  const { t } = useLanguage()

  return (
    <footer className="surface border-t border-line">
      <div className="mx-auto max-w-[40rem] px-5 py-10 text-center md:px-8 md:py-12">
        <p className="text-xl leading-snug font-semibold md:text-2xl">{t(closing.title)}</p>
        <p className="mt-3 text-sm leading-6 text-ink/85">{t(closing.body)}</p>
        <p className="mt-5 text-sm text-lilac-deep">{t(closing.sign)}</p>
      </div>
    </footer>
  )
}
