# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This version of CRA no longer supports capital letters in the project name, so what might have been JEMSIAFComponents in the past is
now jemsiaf-components

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn storybook`
Runs the storybook development / styling / testing environment.
Open [http://localhost:6000](http://localhst:6000) to view it in the browser.
Storybook will reload any changes to components that you edit.

## Project Build Notes

At its inception, this project is built using the following releases of development tools:

### Visual Studio Code
Version: 1.72.2 (system setup)
Commit: d045a5eda657f4d7b676dedbfa7aab8207f8a075
Date: 2022-10-12T22:15:18.074Z
Electron: 19.0.17
Chromium: 102.0.5005.167
Node.js: 16.14.2
V8: 10.2.154.15-electron.0
OS: Windows_NT x64 10.0.19041
Sandboxed: No

### NodeJS 18.12.1 (LTS)
The NodeJS environment is managed by nvm (Node Version Manager)

### Yarn 3.2.4

### TypeScript 4.8.4-sdk

When Yarn 3 is used, the syntax recognition that relies on the hints found in the imported packages fails when using the TypeScript compiler built into VSCode. Support for the project-specific TypeScript Compiler (tsc) syntax checking is added to the project with the command `yarn dlx @yarnpkg/sdks`
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
