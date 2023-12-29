import React from "react";
import { divider } from "@kokoro-ui/theme";

export interface DividerProps extends React.HTMLAttributes<HTMLButtonElement> {
    orientation?: "horizontal" | "vertical";
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(props => {
    if (props.orientation === "horizontal") {
        return (
            <hr className={divider({ orientation: props.orientation, className: props.className })} />
        );
    }

    if (props.orientation === "vertical") {
        return (
            <div className={divider({ orientation: props.orientation, className: props.className })} />
        );
    }
});

export { Divider };
