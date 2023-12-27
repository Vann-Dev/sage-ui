import React, { useState } from "react";
import { avatar } from "@kokoro-ui/theme";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    src: string;
    alt: string;
    name: string;
}

const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(props => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={avatar({ loaded, className: props.className })}>
            <img src={props.src} alt={props.alt} onLoad={() => setLoaded(true)} className={`z-10 object-cover ${loaded ? "absolute" : "hidden"}`} />
            {props.name}
        </div>
    );
});

export { Avatar };
