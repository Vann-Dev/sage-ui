import React from "react";
import { chips } from "@kokoro-ui/theme";

export interface ChipsProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "primary" | "secondary" | "outline" | "danger" | "warning";
}

// eslint-disable-next-line max-len
const Chips = React.forwardRef<HTMLDivElement, ChipsProps>(props => <div className={chips({ variant: props.variant, className: props.className })}>
    {props.children}
</div>);


export { Chips };
