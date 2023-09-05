'use client'

import {ElementRef} from "react"
import {useState, useRef} from "react";
import {twMerge} from "tailwind-merge";
import PropTypes from "prop-types";
import {COLORS} from "../utils";

type SwitcherProps = {
    className?: string,
    indicatorColor?: string,
    indicatorClassName?: string,
    setSelected: (id) => void,
    tabs: Record<number, string>
}

const Switcher = (props: SwitcherProps) => {
    const {
        className = '',
        indicatorColor = COLORS.primary,
        indicatorClassName = '',
        setSelected = (id) => {},
        tabs = {1:"Tab 1", 2:"Tab 2"}
    } = props

    const switchBg = useRef<HTMLSpanElement>(null)
    const tb1 = useRef<HTMLButtonElement>(null)
    const tb2 = useRef<HTMLButtonElement>(null)

    
    const switcher = (id) => {
        const e = switchBg.current
        const tab1 = tb1.current
        const tab2 = tb2.current



        if (id === 1) {
            e.classList.add("left-1")
            e.classList.remove("left-[48%]")
            tab1.classList.add("text-white")
            tab2.classList.remove("text-white")
        }
        else if (id === 2) {
            e.classList.add("left-[48%]")
            e.classList.remove("left-1")
            tab2.classList.add("text-white")
            tab1.classList.remove("text-white")
        }

        setSelected(id)

    }


    return (
        <div className={twMerge(`w-full text-white font-outfit mx-8 shadow rounded-lg h-10 mt-4 flex p-1 relative items-center bg-black bg-opacity-20 ${className}`)}>
            <button ref={tb1} id="tab1" className="text-white transition duration-500 z-10 w-full h-full flex justify-center items-center" onClick={()=>switcher(1)}>{tabs["1"]}</button>
            <button ref={tb2} id="tab2" className="duration-500 z-10 w-full h-full flex justify-center items-center"  onClick={()=>switcher(2)} >{tabs["2"]}</button>
            <span ref={switchBg} className={twMerge(`z-0 elSwitch bg-white shadow flex items-center justify-center w-1/2 rounded h-[80%] transition-all absolute left-1 duration-500 ${indicatorClassName}`)}
                  style={{
                          backgroundColor: indicatorColor
                      }}>
                    {/*Switch tab*/}
                </span>
        </div>
    );
}

Switcher.propTypes = {
    className : PropTypes.string,
    indicatorColor : PropTypes.string,
    indicatorClassName : PropTypes.string,
    setSelected : PropTypes.func,
    tabs : PropTypes.object.isRequired,
};

export default Switcher;