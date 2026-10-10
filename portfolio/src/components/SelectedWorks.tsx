import { useRef, useState, type KeyboardEvent, type PointerEvent } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { projects } from '../data/projects'
import { sectionTitles, ui } from '../data/site'
import { useLanguage } from '../i18n'
import { CoverFrame } from './Artwork'
import { ExploreLink, ExternalLink } from './Nav'

export function SelectedWorks() {
  const { locale, t } = useLanguage()
  const other = locale === 'zh' ? 'en' : 'zh'
  const [active, setActive] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [dragging, setDragging] = useState(false)
  const dragStart = useRef<number | null>(null)
  const didDrag = useRef(false)
  const deckRef = useRef<HTMLDivElement>(null)

  const move = (direction: -1 | 1) => {
    setActive((current) => (current + direction + projects.length) % projects.length)
  }

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return
    if ((event.target as HTMLElement).closest('a, button, input, select, textarea, [role="button"]')) {
      didDrag.current = false
      return
    }
    dragStart.current = event.clientX
    didDrag.current = false
    setDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStart.current === null) return
    const distance = event.clientX - dragStart.current
    if (Math.abs(distance) > 6) didDrag.current = true
    setDragOffset(Math.max(-150, Math.min(150, distance)))
  }

  const finishDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStart.current === null) return
    if (dragOffset <= -54) move(1)
    if (dragOffset >= 54) move(-1)
    dragStart.current = null
    setDragOffset(0)
    setDragging(false)
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault()
      move(1)
    }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault()
      move(-1)
    }
  }

  return (
    <section id="works" className="scroll-mt-28 border-b border-line" aria-labelledby="works-title">
      <div className="mx-auto max-w-[1180px] px-5 py-10 md:px-8 md:py-14">
        <header className="mb-6 border-b border-line pb-4 md:mb-8">
          <h2 id="works-title" className="text-2xl font-semibold tracking-[-0.035em] text-ink md:text-3xl">
            {t(sectionTitles.works)}
          </h2>
          <p className="mt-1 text-sm tracking-[0.08em] text-muted">{sectionTitles.works[other]}</p>
        </header>

        <div
          ref={deckRef}
          className={`relative h-[39rem] touch-pan-y overflow-hidden select-none outline-none md:h-[36rem] ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          role="region"
          aria-roledescription="carousel"
          aria-label={locale === 'zh' ? '精选作品轮播' : 'Selected works carousel'}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={finishDrag}
          onPointerCancel={finishDrag}
          onClickCapture={(event) => {
            if ((event.target as HTMLElement).closest('a, button, input, select, textarea, [role="button"]')) {
              didDrag.current = false
              return
            }
            if (!didDrag.current) return
            event.preventDefault()
            event.stopPropagation()
            didDrag.current = false
          }}
        >
          <p className="sr-only" aria-live="polite">{t(projects[active].title)}</p>

          {projects.map((project, index) => {
            const ringPosition = (index - active + projects.length) % projects.length
            const slot = ringPosition > projects.length / 2
              ? ringPosition - projects.length
              : ringPosition
            const depth = Math.abs(slot)
            const isActive = slot === 0
            const explore = t(ui.explore)
            const interactiveOffset = isActive ? dragOffset : dragOffset * 0.14

            return (
              <article
                key={project.slug}
                aria-hidden={!isActive}
                inert={!isActive ? true : undefined}
                className="project-card group absolute top-2 left-1/2 w-[min(84vw,34rem)] overflow-hidden transition-[transform,opacity] duration-500 ease-out"
                style={{
                  zIndex: 20 - depth,
                  opacity: Math.max(0.3, 1 - depth * 0.36),
                  pointerEvents: isActive ? 'auto' : 'none',
                  transform: `translateX(-50%) translateX(calc(${slot} * clamp(52px, 7vw, 86px) + ${interactiveOffset}px)) scale(${1 - depth * 0.055}) rotate(${slot * 1.2}deg)`,
                  transformOrigin: 'center top',
                  transitionDuration: dragging ? '0ms' : undefined,
                }}
              >
                {project.cover ? (
                  <CoverFrame
                    cover={project.cover}
                    alt={t(project.coverAlt)}
                    tone={project.tone}
                    priority={index === 0}
                  />
                ) : (
                  <div className="grid aspect-[16/6] min-h-48 place-items-center border-b border-line bg-surface px-6 text-center">
                  <p className="text-xl font-bold tracking-[-0.035em] text-ink md:text-2xl">{t(project.title)}</p>
                  </div>
                )}

                <div className="p-4 md:p-5">
                  <p className="text-xs font-semibold tracking-[0.12em] text-lilac-deep">{project.index}</p>
                  <h3 className="mt-1.5 text-lg leading-tight font-semibold tracking-[-0.025em]">{t(project.title)}</h3>
                  <p className="mt-1 text-sm text-muted">{project.title[other]}</p>
                  <p className="mt-2 text-sm leading-6">{t(project.lede)}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.split(' · ').slice(0, 6).map((item) => <code key={item} className="tech-label">{item}</code>)}
                  </div>
                  <p className="mt-3 font-mono text-xs leading-5 text-muted">{project.meta}</p>

                  <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
                    <ExploreLink
                      to={`/work/${project.slug}`}
                      label={explore}
                      ariaLabel={`${explore} — ${t(project.title)}`}
                    />
                    {project.links.map((link) => (
                      <ExternalLink key={link.href} href={link.href} label={t(link.label)} />
                    ))}
                  </div>
                </div>
              </article>
            )
          })}

          <div className="pointer-events-none absolute inset-x-0 bottom-1 z-20 flex items-center justify-center gap-3 md:inset-0 md:justify-between md:px-[7%]">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label={locale === 'zh' ? '上一个作品' : 'Previous project'}
              className="pointer-events-auto grid h-10 w-10 place-items-center border border-line bg-surface text-ink hover:border-lilac hover:bg-lilac hover:text-paper"
            >
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <span className="min-w-12 text-center font-mono text-xs text-muted md:absolute md:bottom-2 md:left-1/2 md:-translate-x-1/2">{active + 1} / {projects.length}</span>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label={locale === 'zh' ? '下一个作品' : 'Next project'}
              className="pointer-events-auto grid h-10 w-10 place-items-center border border-line bg-surface text-ink hover:border-lilac hover:bg-lilac hover:text-paper"
            >
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
