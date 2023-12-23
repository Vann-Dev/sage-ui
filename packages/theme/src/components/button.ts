import { VariantProps, tv } from "tailwind-variants";

const button = tv({
    base: "font-medium px-6 py-3 rounded-lg hover:opacity-80",
    variants: {
        color: {
            primary: "bg-green-500",
            secondary: "border-green-500 border-2 text-white"
        },
        size: {
            sm: "text-sm",
            md: "text-base",
            lg: "text-lg"
        }
    },
    defaultVariants: {
        size: "sm",
        color: "primary"
    }
});

export type ButtonVariantProps = VariantProps<typeof button>;

export { button };
