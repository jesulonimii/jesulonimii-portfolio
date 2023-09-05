"use client";
//@ts-ignore
import Toggle from "@ui/forms/Toggle.ui";
import { useContext } from "react";
import { DarkTheme } from "@context";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { twMerge } from "tailwind-merge";

const ThemeSwitch = ({ className = "", icon = false }) => {

	const { darkMode, setDarkMode } = useContext(DarkTheme);

	const setTheme = () => {
		setDarkMode(!darkMode);
		localStorage.setItem("darkMode", JSON.stringify(!darkMode));
	};

	return (
		<div className={twMerge(`w-fit`, className)}>
			{icon ? (
				<span className="w-full flex items-center gap-5">
					<SunIcon className="text-gray-600 w-5" />
					<Toggle checked={darkMode} onClick={setTheme} />
					<MoonIcon className="text-gray-600 w-5" />
				</span>
			) : (
				<span className="w-full flex justify-between">
					<p className="">Dark Theme</p>
					<Toggle checked={darkMode} onClick={setTheme} />
				</span>
			)}
		</div>
	);
};

export default ThemeSwitch;
