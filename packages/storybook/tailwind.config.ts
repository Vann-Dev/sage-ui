import type { Config } from 'tailwindcss'
import { color } from "@kokoro-ui/color";

const config: Config = {
  content: [
    // page
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // components
    '../../packages/components/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {},
  plugins: [color()],
}
export default config
