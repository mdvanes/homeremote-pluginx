

# HomeremotePluginx

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

(Goal) Architecture:

Host app: apps/homeremote (React, port 4200)
Remote apps: 
 - apps/new-docker-controls (React, port 4201)
 - apps/new-domoticz-controls (Web Components, port 4202)
 - apps/new-stream-player (Angular, port 4203)

Start the app(s):

```
nvm use
npm start
http://localhost:4200/

// or 
npx nx serve new-docker-controls
http://localhost:4201/
```

Start storybook:

```
npm run nx storybook
localhost:4400
```

# Some steps I took

- Add storybook and "ui" lib
- Add a button component: `npm run nx g @nrwl/react:component button -- --project=ui --export`
- Add (remote) apps: `npm run nx g @nrwl/react:component DockerControls` `npm run nx g @nrwl/react:component DomoticzControls`
- build complex app without module federation (2 remote apps (list of docker containers, list of domoticz devices) each with at least 1 UI component (button), in 1 container app (homeremote) )
- ONGOING How do micro frontends/webpack 5 module federation? E.g. with 2 organisms (list of docker containers, list of domoticz devices). 
  - add a new (React app): `npx nx g @nrwl/react:app new-docker-controls`
  - start it: `npx nx serve new-docker-controls`
  - make it start on different port: modify workspace.json, add `"port": 4201` under serve options
  - repeat for Web components app: `npx nx g @nrwl/web:app new-domoticz-controls`
  - repeat for Angular components app: 
    - `yarn add -D @nrwl/angular`
    - `npx nx g @nrwl/angular:app new-stream-player`
  - Now try to customize webpack config to enable module federation. This is hard because Nx currently does not support Webpack 5 (https://github.com/nrwl/nx/issues/3116), so the existing webpack config "@nrwl/react/plugins/webpack" can't be extended.
    - Set workspace.json > homeremote > webpackConfig from "@nrwl/react/plugins/webpack" to "apps/homeremote/webpackConfig.js"
    - For now, just copy the contents of "@nrwl/react/plugins/webpack" to "apps/homeremote/webpackConfig.js" and add a console.log `console.log("### using custom webpack config ###");` to test if the custom config is used.
    - Test if serve uses the new config: `npx nx serve homeremote`
    - This does not work:
      - Force Webpack 5 with a module resolution
      - Serve fails because of dependency error
  - Wait until official support for Webpack 5, in the mean time try the workaround that only works for Angular.
    - Create a new host app that is Angular based: `npx nx g @nrwl/angular:app homeremote-ng`
    - https://github.com/ebrehault/micro-frontend-with-nx
    - create a new workspace with nx, because it MUST BE an angular workspace. Without it, there will be no angular.json in the root, and that prevents commands that depend on the Angular CLI like `ng add @angular-architects/module-federation --project homeremote-ng --port 4200` from working
    - Create workspace `npx create-nx-workspace@latest homeremote-pluginx-v2`
      - Select Angular App!!
    - cd homeremote-pluginx-v2
    - create host app: `yarn ng generate @nrwl/angular:application --name=homeremote`
    - create remote app: `yarn ng generate @nrwl/angular:application --name=stream-player` and enable routing!!
    - add a module like AdminPanelModule in stream-player, see https://github.com/ebrehault/micro-frontend-with-nx#setup-your-project
    - Add module federation plugin: `yarn ng add @angular-architects/module-federation --project homeremote --port 4200`
    - and `yarn ng add @angular-architects/module-federation --project stream-player --port 4201`
    - add to package.json: `"resolutions": { "webpack": "5.0.0"}` and run `yarn`
    - ??? the "add a module step" above has not been completed. Continue in homeremote-pluginx-v2
    -
- TODO reverse proxy instead of different port numbers, and running with a production build
- ONGOING study https://www.udemy.com/course/microfrontend-course/learn/lecture/23206924#overview (Udemy)
- ONGOING view Angular Module Federation (via Bjorn) https://www.youtube.com/watch?v=Fg2pX79YNa8 (see also @angular-architects/module-federation)
- TODO read https://micro-frontends.org/
- TODO read Angular Module Federation with Nx https://www.angulararchitects.io/aktuelles/using-module-federation-with-monorepos-and-angular/ 
- TODO study https://egghead.io/courses/scale-react-development-with-nx-4038
- TODO how always add storybook file when generating a component?
- TODO How run unit tests? linting? publishing (per module/component)?
- TODO mix Angular, React and Reason/Rust (see https://github.com/module-federation/module-federation-examples/tree/master/comprehensive-demo React + Svelte + Lit)
- TODO remove apps/homeremote/src/app/docker-controls and rename apps/new-docker-controls to apps/docker-controls

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@homeremote-pluginx/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.



## ☁ Nx Cloud

### Computation Memoization in the Cloud

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
