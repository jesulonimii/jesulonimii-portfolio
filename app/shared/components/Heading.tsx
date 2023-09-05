import { twMerge } from "tailwind-merge"

function Heading({ children, className }: { className?: string, children: string | React.ReactNode }) {
	return (
		<strong className={twMerge("font-bold text-4xl font-ubuntu text-text-emphasis dark:text-text-emphasis-dark", className)}>
			{children}
		</strong>
	);
}

export default Heading;