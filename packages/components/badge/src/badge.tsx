import React, { ReactNode } from "react";
import { badge } from "@kokoro-ui/theme";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
    badgeContent: string | ReactNode;
}

// eslint-disable-next-line max-len
const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(props => <div className={"relative"}>
    <div className={badge({ className: props.className, position: props.position })}>
        {
            props.badgeContent
        }
    </div>
    {props.children}
</div>);


export { Badge };
