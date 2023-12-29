import React from "react";
import { radio, radioItem } from "@kokoro-ui/theme";

export interface RadioGroupProps extends React.HTMLAttributes<HTMLButtonElement> {
    label?: React.ReactNode;
    description?: React.ReactNode;
    items: RadioItemProps[];
    orientation?: "horizontal" | "vertical";
    color?: "primary" | "secondary" | "danger" | "warning";
    onValueChange?: (value: string) => void;
    devaultValue?: string;
}

export interface RadioItemProps {
    label: React.ReactNode;
    description?: React.ReactNode;
    className?: string;
    value: string;
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(props => {
    const [selected, setSelected] = React.useState<string>(props.devaultValue!);

    const hasDuplicates = new Set(props.items.map(item => item.value)).size !== props.items.map(item => item.value).length;
    if (hasDuplicates) {
        throw new Error("Radio item should have unique value");
    }

    function select(value: string): void {
        setSelected(value);
        if (props.onValueChange) {
            props.onValueChange(value);
        }
    }

    return (
        <div className="text-white">
            <label className="flex flex-col">
                <span className="font-medium">{props.label}</span>
                <span className="text-xs font-light">{props.description}</span>
            </label>

            <div className={radio({ orientation: props.orientation })}>
                {props.items.map(val => <div onClick={() => select(val.value)} className="flex items-center gap-x-3">
                    <span className={selected === val.value ? radioItem({ color: props.color, className: val.className }) : radioItem({ color: "secondary", className: val.className })} />
                    <label className="flex flex-col">
                        <span className="font-medium">{val.label}</span>
                        <span className="text-xs font-light">{val.description}</span>
                    </label>
                </div>)}
            </div>
        </div>
    );
});

export { RadioGroup };
