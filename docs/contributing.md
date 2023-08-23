# Contributing to this repo

If you see a typo or a bug, PRs and issues are always welcome.

## Technology overview

- This is a static site built with [Astro](https://astro.build/)
- Hosted on Netlify
- Mailing list powered by [Buttondown](https://buttondown.email/)

## Local setup

**Set environment variables**

We set build variables via the Netlify UI. For local development, we use a `.env` file. Copy `.env.example` to `.env`.

`CURRENT_EVENT_ID` must be an event collection id. See `src/content/events`. The event id is the filename without the `.json` extension.

**Install dependencies**

```
yarn
```

**Start development server**

```
yarn start
```

The site will be available at [http://localhost:3000](http://localhost:3000)

**Preview production**

Do a production build and local server to mimic a production environment. Note that there's no reload when files are changed.

```
yarn preview
```

**Build for production**

Generates static content into the `dist` directory that can be served using any static content hosting service.

```
yarn build
```
