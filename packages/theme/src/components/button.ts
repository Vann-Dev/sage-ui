import { VariantProps, tv } from "tailwind-variants";

const button = tv({
    base: "font-medium px-6 py-3 rounded-lg enabled:hover:opacity-80 transition-opacity duration-100 disabled:opacity-80",
    variants: {
        color: {
            primary: "bg-[#4FB055]",
            secondary: "bg-zinc-600",
            outline: "border-[#4FB055] border-2 text-white",
            danger: "bg-red-700",
            warning: "bg-yellow-600",
            ghost: "bg-transparent",
            link: "hover:underline"
        }
    },
    defaultVariants: {
        color: "primary"
    }
});

export type ButtonVariantProps = VariantProps<typeof button>;

export { button };
