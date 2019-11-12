# UserLAnd Technologies Website

This project was bootstrapped with [Gatsby](https://github.com/gatsbyjs/gatsby).

Below you will find some information on how to perform common tasks.<br>

## Available Scripts

In the project directory, you can run:

### `npm install`
Install packages for first time setup.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Gatsby will perform an optimized production build for your site, generating static HTML and per-route JavaScript code bundles.

### Deploying

If you want to deploy to _production_ you should just merge this to master and let CI take care of it.

To deploy to a "pushbutton" environment follow these instructions.

1. Install go-task: `curl -sL https://taskfile.dev/install.sh | sh`
2. Prepare the environment: `task prepare WORKSPACE=<workspace name>`
3. For your next deploy you can just do `task deploy WORKSPACE=<workspace name>`
4. When you are done: `task destroy WORKSPACE=<workspace name>`

View your deploy at `<workspace name>.testpunch.io`

The workspace name should be a single short, memorable word.

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── yarn.lock

  1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.  
  
  2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.
  
  3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.
  
  4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.
  
  5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.
  
  6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).
  
  7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.
  
  8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.
  
  9.  **`LICENSE`**: Gatsby is licensed under the MIT license.
  
  10.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**
  
  11.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.
  
  12.  **`README.md`**: A text file containing useful reference information about your project.
  
  13.  **`yarn.lock`**: [Yarn](https://yarnpkg.com/) is a package manager alternative to npm. You can use either yarn or npm, though all of the Gatsby docs reference npm.  This file serves essentially the same purpose as `package-lock.json`, just for a different package management system.

