# ESlint Config Sammy

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/sammysaglam/eslint-config-sammy/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/eslint-config-sammy.svg?style=flat)](https://www.npmjs.com/package/eslint-config-sammy)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

Highly opinionated & React Typescript centric.

## Features:

1. Lots of React goodness
2. "Prettier" formatting (https://prettier.io/)

## Installation

### Step 1:

```bash
yarn add eslint eslint-config-sammy eslint-plugin-prettier --dev
```

### Step 2:

To the root of your project add the following two files:

#### .eslintrc

```json
{
  "extends": "sammy"
}
```

#### .prettierrc.js

```javascript
module.exports = {
  ...require("eslint-config-sammy/.prettierrc.recommended.js"),
};
```

### Step 3:

Add to your package.json "scripts" key (if doesn't exist, create):

```json
"scripts": {
  "lint": "\"./node_modules/.bin/eslint\" . --ext js,ts,tsx"
}
```

### Step 4:

Add your ignore files: `.prettierignore` & `.eslintignore`

```
**/node_modules/**
**/build/**
**/coverage/**
```

### Step 5:

Run in your terminal

```bash
yarn lint
yarn lint --fix
```
