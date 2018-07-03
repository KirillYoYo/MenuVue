# VueCreateApp

> VueCreateAppPr

## Commands

You can replace `yarn` with `npm run` here.

```bash
# build for production
yarn build

# development mode
yarn dev

# run unit tests
yarn test

# serve the bundled dist folder in production mode
yarn serve
```

## Polyfills

By default we only polyfill `window.Promise` and `Object.assign`. You can add more polyfills in `./src/polyfills.js`.

## Analyze bundle size

Run `yarn report` to get a report of bundle size which helps you:

- Realize what's really inside your bundle
- Find out what modules make up the most of it's size
- Find modules that got there by mistake
- Optimize it!

## Progress Web App

Your app is now offline-ready (only in production bundle), which means you can visit it without network.

Here we use a default [manifest.json](./static/manifest.json) to configurure your pwa, for example, to enable *Add to Home Screen* feature on Android. It will be copied directly to `./dist/manifest.json`.


For all the available options, please head to [poi-preset-offline](https://github.com/egoist/poi/tree/master/packages/poi-preset-offline#api).

---

This project is generated by [create-vue-app](https://github.com/vue-land/create-vue-app).
