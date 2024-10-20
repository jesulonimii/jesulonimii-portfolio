import CardLayout from "@commons/layouts/Card.layout"
import ThemeSwitch from "./ThemeSwitch"

function ThemeBar({}) {
	return (
		<div className="z-[1000] w-fit items-center justify-center flex flex-col left-[3%] bottom-[3%] fixed">
			<CardLayout
				className="w-fit py-3 flex gap-2 items-center bg-bg-50 dark:bg-bg-dark-50 bg-opacity-20 backdrop-blur">
				<ThemeSwitch icon />
			</CardLayout>
		</div>
	)
}

//@ts-ignore
export default ThemeBar
