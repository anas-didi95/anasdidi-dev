# My Personal Blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/9258c80b-c925-48fc-822f-bc3ad72be1d8/deploy-status)](https://app.netlify.com/sites/anasdidi-dev/deploys)
![build](https://github.com/anas-didi95/anasdidi-dev/workflows/build/badge.svg)

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

This project is developed and deployed using Node 14. To change the Node version, change the following files:
- docker-compose.yml
- .github/workflows/build.yml
- .nvmrc

---

## Technologies
* Gatsby - version 2.32.13
* React - version 16.13.1
* Bulma - version 0.9.2
* Prismjs: version 1.23.0
* TypeScript - version 4.0.3

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
- [x] Landing page
- [x] Articles page
- [x] Tags page
- [x] About Me page
- [x] 404 error page
- [x] Articles pagination

---

## Credits
* Gatsby starter [gatsby-starter-default-typescript](https://www.gatsbyjs.org/starters/andykenward/gatsby-starter-default-typescript/) by andykenward.
* Bulma theme '[Pulse](https://jenil.github.io/bulmaswatch/pulse/)' by Jenil Gogari.
* Header image from <a href="http://cooltext.com" target="_top"><img src="https://cooltext.com/images/ct_button.gif" width="88" height="31" alt="Cool Text: Logo and Graphics Generator" /></a>
* Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
* Photo by <a href="https://unsplash.com/@flowforfrank?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ferenc Almasi</a> on <a href="https://unsplash.com/s/photos/developer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

---

## Contact
Created by [Anas Juwaidi](mailto:anas.didi95@gmail.com)
