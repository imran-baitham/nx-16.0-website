# Nx Mono Website

Clone 😍 and use these commands for different purposes 👍

```bash

 git clone https://github.com/imran-baitham/nx-16.0-website.git

```

```json
  "scripts": {
    "start": "nx serve library",
    "build": "npx nx build library",
    "storybook" : "nx run shared-greeter:storybook",
    "update": "nx migrate latest",
    "list": "nx list",
    "format": "prettier -w ./ --ignore-path .prettierignore",
    "prep": "yarn format"
  }
```

```js

npx create-nx-workspace@latest

npx create-nx-workspace@latest --preset=npm // set npm

npx create-nx-workspace@latest package --preset=npm // package base monorepo with npm

nx list // for show insall commands

nx list @nx/react // package name

yarn nx generate @nx/react:library --help // generate @nx/react:library [name] [options,...]

npm i typescript -D -W // install typescript -w => workspace

npm install -D @nx/storybook // install storybook

nx run library-e2e:e2e // test for end 2 end
nx run library-e2e:e2e --watch // watch also for test

```
