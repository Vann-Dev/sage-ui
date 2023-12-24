import plugin from "tailwindcss/plugin";
import { colors } from "./color";

const customColor: Record<string, Record<string, string>> = {};

colors.forEach(col => {
    customColor[`.bg-${col.name}`] = { "background-color": col.color };
    customColor[`.text-${col.name}`] = { color: col.color };
    customColor[`.border-${col.name}`] = { "border-color": col.color };
    customColor[`.divide-${col.name}`] = { "border-color": col.color };
});

const color = plugin(({ addUtilities }) => {
    addUtilities(customColor);
});

export { color };
