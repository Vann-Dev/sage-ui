# How to install

<br/>

## ****Requirements****

- [**@kokoro-ui/theme**](https://www.npmjs.com/package/@kokoro-ui/theme)
- [**@kokoro-ui/button**](https://www.npmjs.com/package/@kokoro-ui/button)
- [**@kokoro-ui/color**](https://www.npmjs.com/package/@kokoro-ui/color)

---

## ****npm****
```bash
npm i @kokoro-ui/color @kokoro-ui/button
```

---

## ****pnpm****
```bash
pnpm add @kokoro-ui/color @kokoro-ui/button
```

---

## ****yarn****
```bash
yarn add @kokoro-ui/color @kokoro-ui/button
```

---

# Usage

**Typescript**
```tsx
import { Button } from "@kokoro-ui/button";

const app = () => {
    return (
        <Button color="primary">
            Primary
        </Button>
    )
};

export default app;
```

**Javascript**
```jsx
const { Button } = require("@kokoro-ui/button");

const app = () => {
    return (
        <Button color="primary">
            Primary
        </Button>
    )
};

export default app;
```