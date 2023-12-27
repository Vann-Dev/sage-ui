import { VariantProps, tv } from "tailwind-variants";

const avatar = tv({
    base: "relative flex items-center justify-center text-white text-xl rounded-full aspect-square h-16 overflow-hidden",
    variants: {
        loaded: {
            true: "bg-inherit",
            false: "bg-primary"
        }
    },
    defaultVariants: {
        loaded: false
    }
});

export type AvatarVariantProps = VariantProps<typeof avatar>;

export { avatar };
