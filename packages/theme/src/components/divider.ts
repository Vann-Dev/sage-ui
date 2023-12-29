import { VariantProps, tv } from "tailwind-variants";

const divider = tv({
    base: "bg-divider shrink-0 border-none",
    variants: {
        orientation: {
            horizontal: "h-[1.5px] w-full",
            vertical: "w-[1.5px] h-full"
        }
    },
    defaultVariants: {
        orientation: "horizontal"
    }
});

export type DividerVariantProps = VariantProps<typeof divider>;

export { divider };
