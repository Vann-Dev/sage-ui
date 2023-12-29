import { VariantProps, tv } from "tailwind-variants";

const code = tv({
    base: "px-4 py-1 text-white rounded-lg",
    variants: {
        variant: {
            primary: "bg-primary",
            secondary: "bg-secondary",
            danger: "bg-danger",
            warning: "bg-warning"
        }
    },
    defaultVariants: {
        variant: "primary"
    }
});

export type CodeVariantProps = VariantProps<typeof code>;

export { code };
