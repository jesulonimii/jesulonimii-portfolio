"use client"
import { BrandIcon } from "@assets/images"
import CardLayout from "@commons/layouts/Card.layout"
import Link from "next/link"
import { useEffect, useState } from "react"

function Loading({}) {

	const [open, setOpen] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setOpen(true)
		}, 1000);
	}, [])

	return (
		<div className="h-screen w-full flex items-center justify-center z-[5000]">
			<div className="relative flex justify-center items-center group">
				<div  className="absolute p-2 z-10 cursor-pointer">
					<BrandIcon className=" w-12 fill-secondary dark:fill-white"/>
				</div>

				<CardLayout className={`overflow-none p-0 w-0 ${open && "w-[20vw] opacity-100"} transition-width duration-1000 opacity-0 py-1 flex gap-2 items-center justify-between bg-bg-50 dark:bg-bg-dark-50 bg-opacity-20 backdrop-blur`}>

					<p className={"w-[40%] ml-2 font-medium text-center"}>
						Jesulonimii
					</p>
					<div className="w-[20%]"></div>
					<p className={"w-[40%] mr-1 font-medium text-center"}>
						William
					</p>

				</CardLayout>
			</div>
		</div>
	)
}

export default Loading
