import {twMerge} from "tailwind-merge";
import React from "react";
import {cn} from "@utils";

type FormInputProps = React.ComponentProps<"input"> & {
	className?: string;
	register?: any;
	startIcon?: any;
	endIcon?: any;
	iconClick?: any;
	label?: any;
	description?: string;
	isWidget?: boolean;
};

const FormInput = (props: FormInputProps) => {
	const {className = "", startIcon, endIcon, iconClick, label, register, description, isWidget, ...rest} = props;

	// const textFieldClass = `bg-gray-600 text-black dark:text-gray-400 my-2 dark:autofill:bg-gray-900 autofill:bg-gray-500 p-4 ${
	// 	startIcon && "pl-12"
	// } ${
	// 	endIcon && "pr-12"
	// } outline-0 focus:ring-2 border border-gray-400 dark:border-0 ring-primary transition-200 font-outfit bg-opacity-20 rounded-lg w-full`;

	if (label)
		return (
			<div className="my-4 w-full">
				<div className="flex gap-2">
					<p
						className={cn(
							`font-outfit font-medium text-black dark:text-gray-500`,
							isWidget && "dark:text-black"
						)}>
						{label}
					</p>
					{description && <em className="font-outfit text-gray-500 dark:text-gray-700">(*{description})</em>}
				</div>
				<div className="relative flex w-full items-center">
					<div
						className={`absolute left-4 h-6 w-6 text-gray-400 ${
							iconClick && "hover:text-primary cursor-pointer"
						}`}
						onClick={iconClick}>
						{startIcon}
					</div>
					<input
						type="text"
						{...rest}
						{...register}
						required
						className={cn(
							`bg-gray-600 text-black  my-2 dark:autofill:bg-gray-900 autofill:bg-gray-500 p-4 outline-0 focus:ring-2 border border-gray-400 dark:border-0 ring-primary transition-200 font-outfit bg-opacity-20 rounded-lg w-full`,
							startIcon && "pl-12",
							endIcon && "pr-12",
							isWidget ? "dark:text-black" : "dark:text-gray-400",
							className
						)}
					/>
					<div
						className={`absolute right-4 h-6 w-6 text-gray-400 transition ${
							iconClick && "hover:text-primary cursor-pointer"
						}`}
						onClick={iconClick}>
						{endIcon}
					</div>
				</div>
			</div>
		);
	else
		return (
			<div className="relative flex w-full items-center">
				<div
					className={`absolute left-4 h-6 w-6 text-gray-400 ${
						iconClick && "hover:text-primary cursor-pointer"
					}`}
					onClick={iconClick}>
					{startIcon}
				</div>
				<input
					type="text"
					{...rest}
					{...register}
					required
					className={cn(
						`bg-gray-600 text-black dark:text-gray-400 my-2 dark:autofill:bg-gray-900 autofill:bg-gray-500 p-4 outline-0 focus:ring-2 border border-gray-400 dark:border-0 ring-primary transition-200 font-outfit bg-opacity-20 rounded-lg w-full`,
						startIcon && "pl-12",
						endIcon && "pr-12",
						isWidget && "!dark:text-black",
						className
					)}
				/>
				<div
					className={`absolute right-4 h-6 w-6 text-gray-400 transition ${
						iconClick && "hover:text-primary cursor-pointer"
					}`}
					onClick={iconClick}>
					{endIcon}
				</div>
			</div>
		);
};

export default FormInput;
