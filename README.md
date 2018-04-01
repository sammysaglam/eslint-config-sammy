# ESlint Sammy Preset
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/sammysaglam/eslint-sammy-preset/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/eslint-sammy-preset.svg?style=flat)](https://www.npmjs.com/package/eslint-sammy-preset)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

Highly opinionated & React/JSX centric. 

## Features:
1) Lots of React goodness
2) "Prettier" formatting (https://prettier.io/)

## Installation

### Step 1:
```bash
yarn add eslint eslint-sammy-preset --dev
```

or, if you use npm:

```bash
npm install eslint eslint-sammy-preset --save-dev
```

### Step 2:
To the root of your project add the following two files:

#### .eslintrc.js
```javascript
module.exports = require('eslint-sammy-preset');
```

#### .prettierrc.js
```javascript
module.exports = require('eslint-sammy-preset/.prettierrc.recommended.js');
```

### Step 3:
Add to your package.json "scripts" key (if doesn't exist, create):
```json
"scripts": {
    "lint": "\"./node_modules/.bin/eslint\" src",
    "lint:fix": "\"./node_modules/.bin/eslint\" src --fix",
}
```

### Step 4:
Run in your terminal
```bash
yarn lint
```

or, if you use npm:

```bash
npm run lint
```

### Step 4.5
To auto-fix your code formatting:
```bash
yarn lint:fix
```

or, if you use npm:

```bash
npm run lint:fix
```