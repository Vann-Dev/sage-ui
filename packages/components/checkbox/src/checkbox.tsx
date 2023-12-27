import React, { ReactNode, useState } from "react";
import { checkbox } from "@kokoro-ui/theme";

export interface CheckboxProps extends React.HTMLAttributes<HTMLButtonElement> {
    selected: boolean;
    icon?: ReactNode;
    onCheck?: (isChecked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>((props, ref) => {
    const [selected, setSelected] = useState(props.selected);

    const icon = props.icon
        ? props.icon
        : <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z" />
        </svg>;

    function check(status: boolean): void {
        setSelected(status);
        if (props.onCheck) {
            props.onCheck(status);
        }
    }

    return (
        <button onClick={() => check(!selected)} ref={ref} className={"flex justify-center items-center gap-x-3"}>
            <div className={checkbox({ className: props.className, selected })}>
                {
                    selected
                        ? icon
                        : null
                }
            </div>
            {props.children}
        </button >
    );
});


export { Checkbox };
