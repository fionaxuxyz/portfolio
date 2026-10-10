# Fiona Portfolio

静态个人作品集，放在 `portfolio/` 目录里。仓库根目录的 `README.md` 仍然是 GitHub Profile，不会被这个网站覆盖。

技术栈：React、TypeScript、Vite、Tailwind CSS、Motion、Lucide。内容来自 Profile README，中英文全文都在 `src/data/`。

默认语言是中文，可在 `src/config.ts` 里把 `defaultLocale` 改成 `'en'`。

## 本地开发

```bash
cd portfolio
npm install
npm run dev
```

本地预览使用 Vite 的 `base: /`，地址一般是 `http://127.0.0.1:5173/`。

类型检查：

```bash
npm run typecheck
```

生产构建：

```bash
npm run build
npm run preview
```

## 部署到 GitHub Pages

这个仓库是 `fionaxuxyz/fionaxuxyz`，GitHub Pages 会把它当作项目站点，地址是：

https://fionaxuxyz.github.io/fionaxuxyz/

工作流 `.github/workflows/deploy-portfolio.yml` 在构建时设置 `PAGES_BASE=/fionaxuxyz/`，让图片、路由和静态资源都带上这个前缀。详情页刷新依赖构建产物里的 `404.html`，它会把深层链接交回前端路由。

第一次部署需要在 GitHub 仓库里打开：

**Settings → Pages → Build and deployment → Source → GitHub Actions**

之后推送到 `main`，并且改动落在 `portfolio/` 或这条工作流上，就会自动构建并发布。也可以在 Actions 里手动运行 **Deploy portfolio**。

如果以后把站点放到用户主页仓库（`username.github.io`），把工作流里的 `PAGES_BASE` 改成 `/`。

封面图直接引用仓库根目录的 `assets/*.png`，不要把 Profile README 里的原文改成摘要。
