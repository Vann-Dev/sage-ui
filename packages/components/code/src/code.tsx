import React from "react";
import { code } from "@kokoro-ui/theme";

export interface CodeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "primary" | "secondary" | "danger" | "warning";
}

const Code = React.forwardRef<HTMLDivElement, CodeProps>(props => <div className={code({ className: props.className, variant: props.variant })}>
    {props.children}
</div>);


export { Code };
