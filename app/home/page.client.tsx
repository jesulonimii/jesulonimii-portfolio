"use client"

import HeroSection from "@/app/home/views/hero.section"
import DesignsCarouselSection from "@/app/home/views/designs-carousel.section"
import TechStackSection from "@/app/home/views/TechStack.section"
import AnimationWorksSection from "@/app/home/views/animation-work.section"
import ProjectsSection from "@/app/home/views/projects.section"
import FooterSection from "@/app/home/views/Footer.section"
import React from "react"

export default function HomeClient() {


	return (
		<main className="h-full py-32 px-4 md:px-32 smd:px-44 flex flex-col gap-y-8">


			<HeroSection />

			<TechStackSection />

			<DesignsCarouselSection />

			<AnimationWorksSection />

			<ProjectsSection/>

			<FooterSection/>

			<div className="min-h-[40vh] w-full"></div>

		</main>
	)
}
