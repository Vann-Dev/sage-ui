import React from "react";
import { ButtonVariantProps, button } from "@sage-ui/theme";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    color: ButtonVariantProps["color"] | "primary";
    size?: ButtonVariantProps["size"];
    disabled?: boolean;
    label: string;
}


// eslint-disable-next-line max-len
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => <button disabled={props.disabled} ref={ref} className={button({ color: props.color, size: props.size })}>
    {props.label ? props.label : "Sage UI Button"}
</button>);


export { Button };
