"use client";
//@ts-ignore
import React from "react";
import {twMerge} from "tailwind-merge";
import LoadingSpinner from "../LoadingSpinner";
import "@assets/css/button-animations.css"

type CustomButtonProps = {
	className?: string;
	border?: boolean;
	children?: React.ReactNode;
	variant?: "contained" | "outlined" | "text";
	disabled?: boolean;
	onClick?: any;
	startIcon?: any;
	endIcon?: any;
	style?: {};
	loading?: boolean;
	animatedHover?: boolean;
} & React.ComponentProps<"button">;

const CustomButton = (props: CustomButtonProps) => {
	const {
		className = "",
		border = false,
		children = "",
		variant = "outlined",
		disabled = false,
		onClick = null,
		startIcon,
		endIcon,
		style = {},
		loading = false,
		animatedHover = false,
		...rest
	} = props;

	const variance = {
		contained: `${border && "border"} bg-primary text-white `,
		outlined: "text-secondary dark:text-text-base-dark border border-outline dark:border-outline-dark",
		text: "text-secondary hover:ring-1",
	};

	const handleClick = (event: any) => {
		//rippleEffect(event);
		onClick && onClick(event);
	};

	const classes = twMerge(
		` hover:ring-2 ${variance[variant]} ${
			disabled && "cursor-not-allowed"
		} py-3 px-4 font-[500] flex justify-center items-center gap-1 text-[12px] cursor-pointer rounded-lg font-outfit relative overflow-hidden capitalize transition duration-500 disabled:cursor-not-allowed ${animatedHover && "animated-fill-up"} ${className}`
	);

	return (
		<button disabled={disabled || loading} onClick={handleClick} className={classes} style={style} {...rest}>
			{!loading && (
				<div className="flex items-center">
					{startIcon && <span className="mr-2 h-5 w-5">{startIcon}</span>}
					{children}
					{endIcon && <span className="ml-2 h-5 w-5">{endIcon && endIcon}</span>}
				</div>
			)}
			{loading ? <LoadingSpinner color={"black"} className="dark:text-white" /> : null}
		</button>
	);
};

function rippleEffect(event: any) {
	const btn = event.currentTarget;

	const circle = document.createElement("span");
	const diameter = Math.max(btn.clientWidth, btn.clientHeight);
	const radius = diameter / 2;

	circle.style.width = circle.style.height = `${diameter}px`;
	circle.style.left = `${event.clientX - (btn.offsetLeft + radius)}px`;
	circle.style.top = `${event.clientY - (btn.offsetTop + radius)}px`;
	circle.classList.add("effect-x-ripple");

	const ripple = btn.getElementsByClassName("effect-x-ripple")[0];

	if (ripple) {
		ripple.remove();
	}

	btn.appendChild(circle);
}

export default CustomButton;
