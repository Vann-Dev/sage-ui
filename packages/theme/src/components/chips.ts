import { VariantProps, tv } from "tailwind-variants";

const chips = tv({
    base: "px-3 py-[6px] rounded-lg enabled:hover:opacity-80 transition-opacity duration-100 disabled:opacity-80 text-white",
    variants: {
        variant: {
            primary: "bg-primary",
            secondary: "bg-secondary",
            outline: "border-primary border-2",
            danger: "bg-danger",
            warning: "bg-warning",
            ghost: "bg-transparent",
            link: "hover:underline"
        }
    },
    defaultVariants: {
        variant: "primary"
    }
});

export type ChipsVariantProps = VariantProps<typeof chips>;

export { chips };
