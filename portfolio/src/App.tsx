import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Nav } from './components/Nav'
import { ui } from './data/site'
import { useLanguage } from './i18n'
import { prefersReducedMotion } from './lib/text'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export function App() {
  const { t } = useLanguage()

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-lilac focus:px-3 focus:py-2 focus:text-paper"
      >
        {t(ui.skip)}
      </a>
      <ScrollManager />
      <Nav />
      <main id="content">
        <Outlet />
      </main>
    </>
  )
}
