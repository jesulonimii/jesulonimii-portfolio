"use client"
import ThemeSwitch from "@ui/ThemeSwitch";
import CardLayout from "@commons/layouts/Card.layout";
import { BrandIcon } from "@assets/images"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

function Header({}) {

	const router = useRouter();
	const [openHeader, setOpenHeader] = useState(false);

	return (
		<header className="z-[1000] w-full items-center justify-center flex flex-col top-[4%] sticky">

			<div className="relative flex justify-center items-center group">
				<div onClick={()=>setOpenHeader(!openHeader)}  className="absolute bg-primary bg-opacity-10 rounded-full p-2 z-10 cursor-pointer">
					<BrandIcon className=" w-12 fill-secondary dark:fill-white"/>
				</div>

				<CardLayout className={`overflow-none p-0 w-0 opacity-0 group-hover:w-[20vw] group-hover:opacity-100 ${openHeader && "w-[20vw] opacity-100"}  transition-width duration-500 py-1 flex gap-2 items-center justify-between bg-bg-50 dark:bg-bg-dark-50 bg-opacity-20 backdrop-blur`}>

					<p className={"w-[40%] ml-2 font-medium text-center"}>
						<Link href="#about" className="hover:text-primary">About</Link>
					</p>
					<div className="w-[20%]"></div>
					<p className={"w-[40%] mr-1 font-medium text-center"}>
						<Link href="#projects" className="hover:text-primary">Projects</Link>
					</p>

				</CardLayout>
			</div>

		</header>
	);
}

//@ts-ignore
export default Header;
