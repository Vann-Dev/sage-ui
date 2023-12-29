import { VariantProps, tv } from "tailwind-variants";

const radio = tv({
    base: "mt-4",
    variants: {
        orientation: {
            horizontal: "flex flex-row gap-x-4",
            vertical: "flex flex-col gap-y-2"
        }
    },
    defaultVariants: {
        orientation: "vertical"
    }
});

export type RadioVariantProps = VariantProps<typeof radio>;

const radioItem = tv({
    base: "rounded-full w-3 h-3",
    variants: {
        color: {
            primary: "bg-primary",
            secondary: "bg-secondary",
            danger: "bg-danger",
            warning: "bg-warning"
        }
    },
    defaultVariants: {
        color: "primary"
    }
});

export type RadioItemVariantProps = VariantProps<typeof radioItem>;

export { radio, radioItem };
