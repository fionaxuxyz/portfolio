import { writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

const root = dirname(fileURLToPath(import.meta.url))
const productionBase = '/portfolio/'

function githubPagesFallback(pagesBase: string): Plugin {
  return {
    name: 'github-pages-fallback',
    apply: 'build',
    closeBundle() {
      const base = pagesBase.endsWith('/') ? pagesBase : `${pagesBase}/`
      const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Fiona</title>
    <script>
      sessionStorage.setItem('spa-redirect', location.pathname + location.search + location.hash)
      location.replace(${JSON.stringify(base)})
    </script>
  </head>
  <body></body>
</html>
`
      writeFileSync(resolve(root, 'dist/404.html'), html)
    },
  }
}

export default defineConfig(({ command }) => {
  const base = command === 'build' ? productionBase : '/'

  return {
    base,
    plugins: [react(), tailwindcss(), githubPagesFallback(base)],
    server: {
      fs: {
        allow: [resolve(root, '..')],
      },
    },
  }
})
