# @kokoro-ui/radio

<br/>

---

## ****npm****
```bash
npm i @kokoro-ui/radio
```

---

## ****pnpm****
```bash
pnpm add @kokoro-ui/radio
```

---

## ****yarn****
```bash
yarn add @kokoro-ui/radio
```

---

# Usage

**Typescript**
```tsx
import { RadioGroup } from "@kokoro-ui/radio";

const app = () => {
    return (
        <RadioGroup
            description="JavaScript was invented by Brendan Eich in..."
            devaultValue="1995"
            items={[
              {
                label: '1997',
                value: '1997'
              },
              {
                label: '1995',
                value: '1995'
              },
              {
                label: '1999',
                value: '1999'
              }
            ]}
            label="When JavaScript was invented"
            onValueChange={() => {}}
            orientation="vertical"
        />
    )
};

export default app;
```

**Javascript**
```jsx
const { RadioGroup } = require("@kokoro-ui/radio");

const app = () => {
    return (
        <RadioGroup
            description="JavaScript was invented by Brendan Eich in..."
            devaultValue="1995"
            items={[
              {
                label: '1997',
                value: '1997'
              },
              {
                label: '1995',
                value: '1995'
              },
              {
                label: '1999',
                value: '1999'
              }
            ]}
            label="When JavaScript was invented"
            onValueChange={() => {}}
            orientation="vertical"
        />
    )
};

export default app;
```