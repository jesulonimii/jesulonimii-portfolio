import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
	className?: string;
	children?: ReactNode;
};

function CardLayout({ children, className, ...rest }: Props) {
	return (
		<div
			className={twMerge(
				`rounded-xl p-4 h-fit min-h-fit flex border overflow-clip border-outline dark:border-outline-dark`, className
			)} {...rest}>
			{children}
		</div>
	);
}

export default CardLayout;
