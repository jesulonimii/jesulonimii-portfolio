"use client"
import React, { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import { GoogleIcon } from "@assets/icons"

function TechStackSection({ className = "" }) {


	const [stackIcons, setStackIcons] = useState([])

	useEffect(() => {
		//@ts-ignore
		const iconsInFolder = require.context("@assets/icons/stack/", false, /\.(svg)$/)
		const iconsInFolderParsed = iconsInFolder.keys().filter(name => !name.includes("app"))

		const iconList = iconsInFolderParsed.map(icon => {

			const name = icon.split("/")[1].split(".")[0]

			return {
				icon: iconsInFolder(icon).default,
				name: name.substring(0, 1).toUpperCase() + name.substring(1)
			}
		})
		setStackIcons(iconList)
	}, [])

	return (
		<div className={twMerge(`h-fit w-full py-4`, className)}>

			<div className="hidden lg:flex items-center my-2">
				<p className="text-gray-400 w-fit min-w-[10%] ">Tech Stack</p>
				<div className="w-full h-[1px] bg-outline dark:bg-outline-dark" />
			</div>

			<div className="flex justify-between items-center my-8" data-aos="fade-up">

				{
					stackIcons.map(({ icon: Icon, name }, index) => <Icon className="w-16 h-16 dark:fill-white" key={index} data-blobity-tooltip={name}/>)
				}

			</div>

		</div>
	)
}

// @ts-ignore
export default TechStackSection
