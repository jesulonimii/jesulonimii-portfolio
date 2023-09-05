"use client";
// @ts-ignore
import LogoSvg from "@assets/images/logo.svg";

type LogoProps = {
	className?: string;
	color?: "black" | "white" | "";
};

const Logo = ({className = "w-24", color = ""}: LogoProps) => {
	if (color === "black") {
		return <LogoSvg className={`fill:black ${className}`} />;
	} else if (color === "white") {
		return <LogoSvg className={`fill-white ${className}`} />;
	} else {
		return <LogoSvg className={`dark:fill-white ${className}`} />;
	}
};

export default Logo;
