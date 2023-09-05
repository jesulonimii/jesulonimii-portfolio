import { useCallback, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";

import useClickOutside from "../hooks/useClickOutside";
import {twMerge} from "tailwind-merge";

export const ColorPicker = ({ color, onChange, className }) => {
    const popover = useRef();
    const [isOpen, toggle] = useState(false);

    const close = useCallback(() => toggle(false), []);
    useClickOutside(popover, close);

    return (
        <div className="relative">
            <div
                className={twMerge(`w-12 h-12 rounded-lg border border-white drop-shadow cursor-pointer ${className}`)}
                style={{ backgroundColor: color }}
                onClick={() => toggle(true)}
            />

            {isOpen && (
                <div className="absolute top-[calc(100% + 2px)] z-[4000] rounded-lg drop-shadow" ref={popover}>
                    <HexColorPicker color={color} onChange={onChange} />
                </div>
            )}
        </div>
    );
};
