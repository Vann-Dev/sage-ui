# @kokoro-ui/color

> Color package used on @kokoro-ui components, such as primary color, secondary, and more.

<br/>

## **Requirements**

- [**tailwindcss 3 or later**](https://tailwindcss.com/)
- [**react 18 or later**](https://reactjs.org/)

---

## **npm**
```
npm i @kokoro-ui/color
```

---

## **pnpm**
```
pnpm add @kokoro-ui/color
```

---

## **yarn**
```
yarn add @kokoro-ui/color
```

<br/>

## **Tailwind Setup**

**tailwind.config.js**
```js
const { color } = require("@kokoru-ui/color");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./node_modules/@kokoro-ui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [color({
    primary: "#32A6FC",
    secondary: "#52525b",
    danger: "#f74434",
    warning: "#f7c334"
  })],
};
```

**tailwind.config.ts**
```js
import type { Config } from 'tailwindcss'
import { color } from "@kokoro-ui/color";

const config: Config = {
  content: [
    // ...
    "./node_modules/@kokoro-ui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [color({
    primary: "#32A6FC",
    secondary: "#52525b",
    danger: "#f74434",
    warning: "#f7c334"
  })],
}
export default config
```