import React from "react";
import { button } from "@kokoro-ui/theme";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    color: "primary" | "secondary" | "outline" | "danger" | "warning" | "ghost" | "link" | undefined;
    disabled?: boolean;
    label: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => <button disabled={props.disabled} ref={ref} className={button({ color: props.color })}>
    {props.label ? props.label : "kokoro UI Button"}
</button>);


export { Button };
