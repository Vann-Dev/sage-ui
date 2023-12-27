import React from "react";
import { button } from "@kokoro-ui/theme";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "danger" | "warning" | "ghost" | "link";
    disabled?: boolean;
}

// eslint-disable-next-line max-len
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => <button disabled={props.disabled} ref={ref} className={button({ variant: props.variant, className: props.className })}>
    {props.children}
</button>);


export { Button };
