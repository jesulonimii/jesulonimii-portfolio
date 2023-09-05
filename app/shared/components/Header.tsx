import ThemeSwitch from "@ui/ThemeSwitch";
import CardLayout from "@layouts/Card.layout";
import { BrandIcon } from "@assets/images"

function Header({}) {
	return (
		<header className="z-[1000] w-full items-center justify-center flex flex-col top-[2%] sticky">
			<CardLayout className="w-fit py-3 flex gap-2 items-center bg-bg-50 dark:bg-bg-dark-50 bg-opacity-20 backdrop-blur">
				<p>Jesulonimii</p>
				<BrandIcon className="w-10 fill-secondary dark:fill-white"/>
				<p>William</p>
			</CardLayout>
		</header>
	);
}

//@ts-ignore
export default Header;