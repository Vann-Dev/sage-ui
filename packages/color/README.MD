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

## **Custom color**

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
    primary: "#fff"
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
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [color({
    primary: "#fff"
  })],
}
export default config
````