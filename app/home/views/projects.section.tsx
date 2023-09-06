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

function BrandDisplaySection({}) {

	const { projects } = Owner
	

	return (
		<section className="flex flex-col gap-10 justify-between ">

			<div id="projects" className="hidden lg:flex items-center my-2 gap-4">
				<Heading>Projects & Works</Heading>
				<div className="grow flex h-[1px] bg-outline dark:bg-outline-dark" />
			</div>


			{
				projects.map((project, index) => {

					return (
						<CardLayout className={`h-[60vh] cursor-pointer w-full bg-center bg-cover group relative`}
									style={{backgroundImage: `url('${project.image}')`}}
									/*data-blobity-tooltip={project.description}*/>


							<CustomButton className="font-bold bg-bg-50 dark:bg-bg-dark-50 group-hover:text-white group-hover:bg-secondary dark:group-hover:text-secondary dark:group-hover:bg-primary bg-opacity-30 text-bold items-center justify-center backdrop-blur p-2 rounded-md min-w-[20%] h-fit absolute top-4 left-4">
								{project.name}
							</CustomButton>

							<CardLayout className="opacity-0 group-hover:opacity-100 transform-gpu bottom-4 transition duration-500 flex flex-col hover:bg-bg-dark-50 hover:text-white bg-bg-50 dark:bg-bg-dark-50 bg-opacity-30 text-bold justify-center backdrop-blur p-4 rounded-md max-w-[50%] w-fit h-fit absolute left-4">
								<p>{project.description}</p>
								<div className="mt-2 font-bold flex items-center">
									<CodeBracketIcon className="w-5 font-bold inline-block mr-2 text-primary" />
									{
										project.tech.map((tech, index) => tech + `${index < project.tech.length - 1 ? " + " : "" }`)
									}
								</div>

								<div className="mt-5 gap-4 text-sm flex items-center">
									{
										project.links.github && (
											<a href={project.links.github} target="_blank" className="flex gap-1 items-center">
												<Github className="w-5 text-primary" />
												View Code
											</a>
										)
									}
									{
										project.links.website && (
											<a href={project.links.github} target="_blank" className="flex gap-1 items-center">
												<Globe className="w-5 text-primary" />
												View Live Link
											</a>
										)
									}
								</div>
							</CardLayout>

						</CardLayout>
					)
				})
			}



		</section>

	)
}

export default BrandDisplaySection