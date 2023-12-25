import { addons } from '@storybook/manager-api';
import { create, themes } from '@storybook/theming/create';

addons.setConfig({
    theme: create({
        base: "dark",

        brandTitle: "kokoro UI",
        brandUrl: "https://github.com/Vann-Dev/kokoro-ui",
        brandImage: "https://content.vannapps.com/public/kokoro-icon.png"
    }),
});