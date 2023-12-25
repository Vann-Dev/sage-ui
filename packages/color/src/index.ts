import plugin from "tailwindcss/plugin";
import { colors, colorType } from "./color";
import { Config, PluginCreator } from "tailwindcss/types/config";

const customColor: Record<string, Record<string, string>> = {};

Object.entries(colors).forEach(([key, value]) => {
    customColor[`.bg-${key}`] = { "background-color": value };
    customColor[`.text-${key}`] = { color: value };
    customColor[`.border-${key}`] = { "border-color": value };
    customColor[`.divide-${key}`] = { "border-color": value };
    customColor[`.ring-${key}`] = { "--tw-ring-color": value };
    customColor[`.outline-${key}`] = { "outline-color": value };
});

function color(colorTheme?: colorType): { handler: PluginCreator; config?: Partial<Config> | undefined } {
    if (colorTheme) {
        Object.entries(colorTheme).forEach(([key, value]) => {
            customColor[`.bg-${key}`] = { "background-color": value };
            customColor[`.text-${key}`] = { color: value };
            customColor[`.border-${key}`] = { "border-color": value };
            customColor[`.divide-${key}`] = { "border-color": value };
            customColor[`.ring-${key}`] = { "--tw-ring-color": value };
            customColor[`.outline-${key}`] = { "outline-color": value };
        });
    }

    return plugin(({ addUtilities }) => {
        addUtilities(customColor);
    });
}

export { color, type colorType };
