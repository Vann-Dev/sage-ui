import { addons } from '@storybook/manager-api';
import { create, themes } from '@storybook/theming/create';

addons.setConfig({
    theme: create({
        base: "dark",

        brandTitle: "Sage UI",
        brandUrl: "https://github.com/Vann-Dev/sage-ui",
        brandImage: "https://content.vannapps.com/public/sageui-icon.png"
    }),
});