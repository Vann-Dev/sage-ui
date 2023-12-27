import { VariantProps, tv } from "tailwind-variants";

const checkbox = tv({
    base: "fill-white rounded-lg w-6 h-6",
    variants: {
        selected: {
            true: "bg-primary",
            false: "border-2 border-primary bg-none"
        }
    },
    defaultVariants: {
        selected: true
    }
});

export type CheckboxVariantProps = VariantProps<typeof checkbox>;

export { checkbox };
