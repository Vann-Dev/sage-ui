import React from "react";
import { ButtonVariantProps, button } from "@kokoro-ui/theme";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    color: ButtonVariantProps["color"] | "primary";
    disabled?: boolean;
    label: string;
}


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => <button disabled={props.disabled} ref={ref} className={button({ color: props.color })}>
    {props.label ? props.label : "kokoro UI Button"}
</button>);


export { Button };
