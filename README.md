# Jagadeesan — Full Stack Developer Portfolio

Personal portfolio website of **Jagadeesan**, a Full Stack Developer in India specializing in React, Next.js, TypeScript, Node.js, Express, MySQL, and MongoDB.

- **Repository**: [github.com/iamjagadeesan/Portfolio](https://github.com/iamjagadeesan/Portfolio)
- **Live Site (GitHub Pages)**: [iamjagadeesan.github.io/Portfolio](https://iamjagadeesan.github.io/Portfolio)

## Features

- **Home**: Interactive Orbit Tech Stack hero, Featured Work highlights (Bontemps, Chokofi, Southern Gourmet Bites), Services overview, About snapshot, and intro logo animation.
- **Work**: Filterable showcase with live project links.
- **About & Experience**: Profile overview, **Professional Journey** timeline, and technical background.
- **CV / Resume**: Structured online resume view with printable layout and direct PDF download (`/Jagadeesan_Resume.pdf`).
- **Contact**: Direct contact channels and inquiry form.

## Tech Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4
- Motion (`motion/react`)
- `react-icons`

## Local Development

```bash
npm install
npm run dev
```

Runs on `http://localhost:3000`.

### Build & Type Check

```bash
npm run lint
npm run build
```

To test the GitHub Pages subpath build locally:

```bash
npm run build:gh-pages
```

## Push & Deploy to GitHub (`iamjagadeesan/Portfolio`)

1. Create an empty repository named **`Portfolio`** under your GitHub account (`https://github.com/new`) — do **not** initialize it with a README or `.gitignore`.
2. Push this initialized repository to GitHub:

   ```bash
   git push -u origin main
   ```

3. Enable GitHub Pages automated deployment:
   - Open **Settings → Pages** in `iamjagadeesan/Portfolio`.
   - Under **Build and deployment → Source**, select **GitHub Actions**.
   - Every push to `main` automatically builds with `/Portfolio/` base path and deploys to `https://iamjagadeesan.github.io/Portfolio/`.
