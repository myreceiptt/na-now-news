# Na Now News of BANANOW Land

## About This Repo

`na-now-news` is the news and publishing site for BANANOW Land. It serves as a lightweight editorial platform where we publish posts and updates, organize content by category, and provide a fast, SEO-friendly reading experience.

### Purpose & Scope

- Publish articles and announcements for the BANANOW universe.
- Keep content structured and easy to navigate (posts, categories, pagination).
- Maintain a stable, production-ready site with predictable builds and deployments.

### Technology

- Framework: **Next.js** + **React**
- Content: **MDX/Markdown-based** posts (built-time rendering and static generation where appropriate)
- Styling: **Tailwind CSS**
- Tooling: **npm**, **ESLint**, **TypeScript**
- Deployment: **Vercel**

### How We Maintain Quality

- We follow **Prof. NOTA Evergreen Standard**: safe monthly updates and scheduled quarterly majors, keeping Node version for Vercel compatibility.
- We validate changes with audit + lint + build, and document runs under `EVERGREENING/completion-log-*.md`.

---

---

## Maintenance by Prof. NOTA Evergreen Standard

This repo is intended to stay evergreen while remaining production-safe.

### Runtime

- Node: **24.x** (see `.nvmrc` and `package.json#engines`)
- Package manager:

  - **NPM** (lockfile: `package-lock.json`)
  - ~~Yarn (lockfile: `yarn.lock`)~~
  - ~~PNPM (lockfile: `pnpm-lock.yaml`)~~

- Deploy target:

  - **Vercel**
  - ~~Netlify~~
  - ~~Self-hosted / Docker~~
  - ~~Other platform (document explicitly)~~

### Monthly Safe Updates (recommended)

1. Check what’s outdated:

   - `npm outdated`
   - ~~yarn outdated~~
   - ~~pnpm outdated~~

2. Upgrade safe (patch/minor) versions:

   - `npm update`
   - ~~yarn upgrade~~
   - ~~pnpm update~~
   - or upgrade specific packages shown as non-major

3. Verify:

   - `npm audit --audit-level=moderate`
   - ~~yarn audit~~
   - ~~pnpm audit~~
   - `npm run lint`
   - `npm run build`
   - ~~yarn build~~
   - ~~pnpm build~~

4. Deploy:

   - **Vercel auto-deploy from `main`**
   - ~~manual deploy according to platform workflow~~

### Major Updates (quarterly / scheduled)

Major upgrades (framework, runtime, or core tooling) must be done one at a time, with a dedicated PR and full testing.

Examples:

- Node major version
- Next.js / React major version
- Tailwind CSS major version
- Package manager major version

---

---

> Regards
>
> [Prof. NOTA](https://deeplink.endhonesa.com/)
>
> [init.endhonesa.com](https://init.endhonesa.com/)

<!--
**myreceiptt/myreceiptt** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on Prof. NOTA's GitHub profile.
-->
