# About

This is a sample look at what a front end architecture could look like.

---

## Scripts

Some of the scripts you may want to run to do various things

_Note: using yarn should also work (though not guarenteed). In general we default here to npm_

### Install Dependencies

`npm i` or `npm install`

### Start Development

- Default: `npm run dev`
  <!-- - With Hot Module Replacement (HMR): `npm run dev:hot` -->

### Build

Default Production build: `npm run build`

### Format files

`npm run format` will run pretty-quick, which will prettify (format) all the files that have changed since last commit.

---

## Tooling

Some information on tools that are used and why

### Module Bundling

[Webpack](https://webpack.js.org/) is the bundler, the tool that compiles all the JS modules.

**Bundle Analysis**

[Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) is used to create a static report in the `/dist` directory called "bundle_sizes.html" when you execute `npm run build`. Open this page after the build process exits to see an analysis of your bundle size and its composition.

### Polyfill

[@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill) currently configured to support the last 2 versions of browsers that are greater than 2% of usage and excludes IE11. Change the configuration in the webpack config if your needs differ.

### Hot Reloading

[React Hot Loader](https://github.com/gaearon/react-hot-loader) enables developers to tweak React components in real time with Hot Module Replacement (HMR). See [this talk](https://www.youtube.com/watch?v=xsSnOQynTHs) to learn more.

_Note: React's Fast Refresh is not yet supported in webpack, but React Hot Loader will be deprecated when it is supported._

### Testing

- [Jest](https://jestjs.io/) for conducting tests.
- [React Testing Library](https://github.com/testing-library/react-testing-library) for creating and testing React Components.

`jest.config.js` and `jest.setup.js` are where you want to put all your jest configuration options.

Jest is configured to work with typescript. See this [link](https://basarat.gitbooks.io/typescript/docs/testing/jest.html) for more info.

### Formatting

- [Prettier](https://prettier.io/) is used for code formatting.
- [Pretty-Quick](https://github.com/azz/pretty-quick) is used to quickly format files that have changed since the last commit.

Use `.prettierrc` and `.prettierignore` files to configure your formatting settings.

### Linting

- [ESLint](https://eslint.org/) is used for linting.
- [Air BnB style](https://github.com/airbnb/javascript) is the chosen style, with configuration so that rules don't conflict with prettier settings.
- [JSX a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y#readme) will check for any accessibility issues in jsx.

Use `.eslintignore` file to ignore any files/folders for the linter.
Use `.eslintrc.json` file for additional eslint configuation.

### Git Hooks

- [Husky](https://github.com/typicode/husky#readme) implements the git hooks.

By default, pre-commit husky will run `pretty-quick` to format all the changed files, `npm run lint` to run the lint rules, and `npm run test` to run tests.

### CSS

- [PostCSS](https://github.com/postcss/postcss) for transforming styles with plugins.
- [Tailwind CSS](https://tailwindcss.com/) as a PostCSS plugin.
- [Purgecss](https://www.purgecss.com/) as a tool for eliminating all the css you're not using. You can configure where it looks in the post css config file. One suggested configuration for larger projects is to only run this when building a production version, as it can take a while to run.

_Note: PurgeCSS is currently not implemented in the build/dev process. This needs additional thought/consideration._

### JS

- [TypeScript](https://www.typescriptlang.org/docs) is installed and included in the dependencies
- [TS Loader](https://github.com/TypeStrong/ts-loader) will help webpack compile TypeScript code using the standard config file
- [Source Map Loader](https://github.com/webpack-contrib/source-map-loader) will take any sourcemap outputs from TypeScript to inform webpack when generating sourcemaps

_Note: This project is set up so that React runs automatically in "strict mode", to check for decrepated API usage._

Additionally, there is a component included that implements a React Error Boundary. It is not presently set up to accept a fallback component to show when in an error state, but this will be a future enchancement.