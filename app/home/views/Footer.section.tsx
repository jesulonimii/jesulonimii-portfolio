import Emphasize from "@components/Emphasize"
import CardLayout from "@layouts/Card.layout"
import * as Lucide from "lucide-react"
import Link from "next/link"
import BgPattern from "@ui/BgPattern"
import IconStyled from "@components/IconStyled"
import Image from "next/image"
import Owner from "@/app/owner"
import CustomButton from "@ui/forms/CustomButton"
import { CodeBracketIcon } from "@heroicons/react/24/outline"
import React from "react"
import Heading from "@components/Heading"
import { Github, Globe } from "lucide-react"

function FooterSection({}) {

	const { projects } = Owner
	

	return (
		<section className="flex flex-col gap-10 justify-between my-4">

			<div id="projects" className="hidden lg:flex items-center my-2 gap-4">
				{/*<Heading>Projects & Works</Heading>*/}
				<div className="grow flex h-[1px] bg-outline dark:bg-outline-dark" />
			</div>

			<div className="text-xs text-gray-400 dark:text-gray-700 cursor-pointer">
				Built with <span className="text-red-500">❤</span> by
				<a href="https://johnmicheal.vercel.app/"> Jesulonimii | </a>
				Design inspired by
				<a href="https://johnmicheal.vercel.app/"> Johnmicheal</a>
			</div>


			<CardLayout className="p-0 h-[40vh] w-full bg-[url('/brand-screen.png')] bg-center bg-cover"
						data-blobity-tooltip="The Jesulonimii Brand"
						data-blobity-invert="true"/>



		</section>

	)
}

export default FooterSection