import ThemeSwitch from "@ui/ThemeSwitch";
import CardLayout from "@layouts/Card.layout";
import { BrandIcon } from "@assets/images"

function Header({}) {
	return (
		<header className="z-[1000] w-full items-center justify-center flex flex-col top-[3%] sticky">

			<div className="relative flex justify-center items-center group">
				<BrandIcon className=" w-12 z-10 cursor-pointer fill-secondary dark:fill-white absolute "/>

				<CardLayout className="p-0 w-0 group-hover:w-[15vw] transition-width duration-1000 opacity-50 group-hover:opacity-100  py-1 flex gap-2 items-center justify-betwee bg-bg-50 dark:bg-bg-dark-50 bg-opacity-20 backdrop-blur">

					<p className={"w-[40%] font-medium text-center"}>Jesulonimii</p>
					<div className="w-[20%]"></div>
					<p className={"w-[40%] font-medium text-center"}>William</p>

				</CardLayout>
			</div>



		</header>
	);
}

//@ts-ignore
export default Header;