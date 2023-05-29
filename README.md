# Links

- Template we used to start this project: https://github.com/ubershmekel/vite-phaser-ts-starter

- After cloning, run this to install dependencies `npm install`
- Run `npm run dev` to start dev server with hotreload
- Run `npm run preview` to locally preview production build

The live demo gets built by the GitHub action at `.github/workflows/main.yml`.

## Why this tech stack

- Phaser is the most prominent web game framework, with a lot of examples for pretty much every scenario.
- Typescript lets me auto-complete everything and makes sure I avoid silly typo bugs.
- Vite is much faster and simpler than Rollup and Webpack. I practically didn't have to do anything to get Phaser to work here, there's no complicated config file. The development-build-refresh cycle seems instant. It's fast enough that I never felt the need to measure it. Vite was built by evanw@ the person that built Vue.js.