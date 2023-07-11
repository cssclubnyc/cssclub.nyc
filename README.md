# [CSS Club NYC](https://cssclub.nyc/) [![Netlify Status](https://api.netlify.com/api/v1/badges/218b3758-b7e3-4b48-b151-77346791a06a/deploy-status)](https://app.netlify.com/sites/cssclubnyc/deploys)

A joyful meetup for people who style.

- This is the repo for the public website https://cssclub.nyc/
- Questions and/or want to get involved: contact@cssclub.nyc

## Next meetup

- Tuesday, August 15th at 7pm
- Resobox East Village - 91 E 3rd St, NYC

## Contributing to this repo

If you see a typo or a bug, PRs and issues are always welcome.

### Technology overview

- This is a static site built with [Astro](https://astro.build/)
- Hosted on Netlify
- Mailing list powered by [Buttondown](https://buttondown.email/)

### Local setup

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
