import { VariantProps, tv } from "tailwind-variants";

const badge = tv({
    base: "bg-primary h-6 aspect-square rounded-full absolute text-white font-medium flex justify-center items-center z-50",
    variants: {
        position: {
            "bottom-right": "-bottom-1 -right-1",
            "bottom-left": "-bottom-1 -left-1",
            "top-right": "-top-1 -right-1",
            "top-left": "-top-1 -left-1"
        }
    },
    defaultVariants: {
        position: "top-right"
    }
});

export type BadgeVariantProps = VariantProps<typeof badge>;

export { badge };
