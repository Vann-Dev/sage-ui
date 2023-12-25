import type { Preview } from "@storybook/react";
import './style.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        {
          name: 'dark',
          value: '#121212',
        }
      ],
    }
  },
};

export default preview;
