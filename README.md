# My Personal Blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/9258c80b-c925-48fc-822f-bc3ad72be1d8/deploy-status)](https://app.netlify.com/sites/anasdidi-dev/deploys)

My personal blog developed using Gatsby and TypeScript.

---

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Credits](#credits)
* [Contact](#contact)

---

## General info
Use the following link to reach the blog: [anasdidi.dev](https://anasdidi.dev/)

---

## Technologies
* Gatsby - version 2.24.80
* React - version 16.14.0
* TypeScript - version 4.0.3
* Bulma - version 0.9.0

---

## Setup
This project configured with Docker Compose to setup the development environment by using VSCode Devcontainer.
Ensure VSCode plugin 'Remote Development' `ms-vscode-remote.vscode-remote-extensionpack` is installed.

1. Clone this repo.
2. Open VSCode and open project in containar.
3. Install the dependencies.
```
yarn install
```
3. Start the development server.
```
yarn start
```
4. Open browser and open `http://localhost:8000` to view the page.

If Docker Compose is not installed, you may use the following guide.
This guide required Node is installed in the machine.

1. Clone this repo.
2. Install the dependencies
```
yarn install

# Or if yarn is not installed
npm install
```
3. Configure the script. You need to find and replace the lines according:
```
# package.json

--- Original
"develop": "gatsby develop --host 0.0.0.0 --port 8000",
--- Replace
"develop": "gatsby develop --port 8000",
```
4. Start the development server.
```
yarn start

# Or if yarn is not installed
npm start
```
4. Open browser and open `http://localhost:8000` to view the page.

---

## Features
* Main page with list of blogs.
* Blog page to view content
* 'About Me' section
* '404' error page
* Blog pagination
* 'Projects' section

To-do list:
* Blog list pagination

---

## Credits
* Gatsby starter [gatsby-starter-default-typescript](https://www.gatsbyjs.org/starters/andykenward/gatsby-starter-default-typescript/) by andykenward.
* Bulma theme '[Pulse](https://jenil.github.io/bulmaswatch/pulse/)' by Jenil Gogari.
* Header image from <a href="http://cooltext.com" target="_top"><img src="https://cooltext.com/images/ct_button.gif" width="88" height="31" alt="Cool Text: Logo and Graphics Generator" /></a>
* Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

---

## Contact
Created by [Anas Juwaidi](mailto:anas.didi95@gmail.com)
