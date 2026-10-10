import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App } from './App'
import { LanguageProvider } from './i18n'
import { HomePage } from './pages/HomePage'
import { ProjectPage } from './pages/ProjectPage'
import { ThemeProvider } from './theme'
import './index.css'

function restoreGitHubPagesRedirect() {
  const stored = sessionStorage.getItem('spa-redirect')
  if (!stored) return
  sessionStorage.removeItem('spa-redirect')
  const base = import.meta.env.BASE_URL
  try {
    const url = new URL(stored, window.location.origin)
    const next = `${url.pathname}${url.search}${url.hash}`
    const current = `${window.location.pathname}${window.location.search}${window.location.hash}`
    const allowed = base === '/' || url.pathname.startsWith(base)
    if (allowed && next !== current) {
      window.history.replaceState(null, '', next)
    }
  } catch {
    /* ignore a malformed redirect */
  }
}

restoreGitHubPagesRedirect()

const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter basename={basename || undefined}>
          <Routes>
            <Route element={<App />}>
              <Route index element={<HomePage />} />
              <Route path="work/:slug" element={<ProjectPage />} />
              <Route path="*" element={<ProjectPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
)
