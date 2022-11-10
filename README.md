# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This version of CRA no longer supports capital letters in the project name, so what might have been JEMSIAFComponents in the past is
now jemsiaf-components

## Available Scripts

Generally, I have had better results running shell commands using the bash shell rather than PowerShell, particularly when working with different versions of node, npm, yarn, etc.

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

The built version can be started with the command `yarn dlx serve -s build`

#### Unresolved issue with build
There's currently (Nov 2022) some problem in the build script that can cause an error message after a successful build:

```
$ yarn build
Failed to compile.

p.replace is not a function
$
```
The solution to this is to delete the build directory and run it again.
### `yarn storybook`
Runs the storybook development / styling / testing environment.
Open [http://localhost:6000](http://localhst:6000) to view it in the browser.
Storybook will reload any changes to components that you edit.

## Project Build Notes

At its inception, this project is built using the following releases of development tools:

### Visual Studio Code
```
Version: 1.72.2 (system setup)
Commit: d045a5eda657f4d7b676dedbfa7aab8207f8a075
Date: 2022-10-12T22:15:18.074Z
Electron: 19.0.17
Chromium: 102.0.5005.167
Node.js: 16.14.2
V8: 10.2.154.15-electron.0
OS: Windows_NT x64 10.0.19041
Sandboxed: No
```
### NodeJS 18.12.1 (LTS)
The NodeJS environment is managed by nvm (Node Version Manager)

### Yarn 3.2.4
Create React App (CRA) will install version 1 of Yarn. We'll upgrade Yarn with the commands which now comprise the preferred way to manage Yarn. Formerly, we used `yarn set version stable`. That command will then be followed by just `yarn` which will transfer most or all of the cached modules from the /node_modules/.cache directory to the /.yarn/cache directory. The recommended procedure changed. It now uses the opt-in corepack feature, introduced in Node.js 16.9.0. See [https://nodejs.org/dist/latest/docs/api/corepack.html](https://nodejs.org/dist/latest/docs/api/corepack.html).
The commands are:
```
$ corepack enable
$ corepack prepare yarn@stable --activate
```
These commands must be accomplished in the development environment with network access, since corepack usually downloads the package managers (Yarn or pnpm) from their repositories.

### TypeScript 4.8.4-sdk

When Yarn 3 is used, the syntax recognition that relies on the hints found in the imported packages fails when using the TypeScript compiler built into VSCode. Support for the project-specific TypeScript Compiler (tsc) syntax checking is added to the project with the command `yarn dlx @yarnpkg/sdks`

### Storybook 6.5.13
### generate-react-cli 8.0.1
This command line tool will is used to create components, along with their style sheets, tests, stories, etc. The command to create a  component called Box would be `yarn dlx genereate-react-cli component Box` Alternately `npx generate-react-cli component Box` Documentation is at [https://www.npmjs.com/package/generate-react-cli](https://www.npmjs.com/package/generate-react-cli)
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
