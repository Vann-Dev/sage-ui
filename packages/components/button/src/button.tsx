import React from "react";
import { ButtonVariantProps, button } from "@sage-ui/theme";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    color: ButtonVariantProps["color"] | "primary";
    size?: ButtonVariantProps["size"];
    label: string;
}


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => <button ref={ref} className={button({ color: props.color, size: props.size })}>
    {props.label ? props.label : "Sage UI Button"}
</button>);


export { Button };
