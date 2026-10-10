import { ArrowUpRight, Moon, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n'
import { ui } from '../data/site'
import { useTheme } from '../theme'

const links = [
  { href: '/#about', label: ui.nav.about, id: 'about' },
  { href: '/#works', label: ui.nav.works, id: 'works' },
  { href: '/#focus', label: ui.nav.focus, id: 'focus' },
  { href: '/#contact', label: ui.nav.contact, id: 'contact' },
] as const

export function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage()

  return (
    <div
      role="group"
      aria-label={t(ui.languageLabel)}
      className="inline-flex border-2 border-lilac bg-paper text-sm font-semibold"
    >
      <button
        type="button"
        aria-pressed={locale === 'zh'}
        onClick={() => setLocale('zh')}
        className={`min-w-14 px-3 py-2 ${locale === 'zh' ? 'bg-lilac text-paper' : 'bg-transparent text-ink hover:bg-lilac/10'}`}
      >
        中文
      </button>
      <button
        type="button"
        aria-pressed={locale === 'en'}
        onClick={() => setLocale('en')}
        className={`min-w-16 border-l-2 border-lilac px-3 py-2 ${locale === 'en' ? 'bg-lilac text-paper' : 'bg-transparent text-ink hover:bg-lilac/10'}`}
      >
        English
      </button>
    </div>
  )
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { locale } = useLanguage()
  const next = theme === 'dark' ? 'light' : 'dark'
  const label = locale === 'zh' ? `切换到${next === 'light' ? '浅色' : '深色'}主题` : `Switch to ${next} theme`

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="grid h-10 w-10 place-items-center border border-line bg-surface text-ink hover:border-lilac hover:bg-lilac hover:text-paper"
    >
      {theme === 'dark' ? <Sun aria-hidden="true" className="h-4 w-4" /> : <Moon aria-hidden="true" className="h-4 w-4" />}
    </button>
  )
}

export function Nav() {
  const { t } = useLanguage()

  return (
    <header className="surface sticky top-0 z-30 border-b border-line/90">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-x-5 gap-y-3 px-5 py-3 md:px-8">
        <Link to="/" className="text-xl font-bold tracking-[-0.04em] text-ink">
          Fiona<span className="text-lilac">.</span>
        </Link>
        <nav aria-label={t(ui.menu)} className="order-3 flex w-full overflow-x-auto md:order-none md:w-auto">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.href}
              className="group/nav relative shrink-0 px-3 py-2 text-sm font-medium text-muted hover:text-ink"
            >
              {t(link.label)}
              <span className="absolute inset-x-3 bottom-0 h-px origin-left scale-x-0 bg-lilac transition-transform group-hover/nav:scale-x-100" />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export function ExploreLink({
  to,
  label,
  ariaLabel,
}: {
  to: string
  label: string
  ariaLabel?: string
}) {
  return (
    <Link
      to={to}
      aria-label={ariaLabel ?? label}
      className="group/link inline-flex items-center gap-3 font-mono text-sm text-ink"
    >
      <span className="border-b border-lilac/40 pb-1 group-hover/link:border-lilac">{label}</span>
      <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
    </Link>
  )
}

export function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center gap-2 border-b border-dashed border-lilac pb-1 font-mono text-sm text-lilac-deep hover:bg-lilac hover:text-paper"
    >
      {label}
      <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
    </a>
  )
}
