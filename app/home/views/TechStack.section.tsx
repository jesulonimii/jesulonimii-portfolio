import React from 'react';
import { twMerge } from "tailwind-merge"
import { GoogleIcon } from "@assets/icons"

function TechStackSection({ className = "" }) {
    return (
        <div className={twMerge(`h-fit w-full py-4`, className)}>

            <div className="hidden lg:flex items-center my-2">
                <p className="text-gray-400 w-fit min-w-[10%] ">Tech Stack</p>
                <div className="w-full h-[1px] bg-outline dark:bg-outline-dark"/>
            </div>

            <div className="flex justify-between items-center my-8" data-aos="fade-up">
                <GoogleIcon className="w-16 h-16"/>

            </div>

        </div>
    );
}

// @ts-ignore
export default TechStackSection;