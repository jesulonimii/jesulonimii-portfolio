"use client"

import HeroSection from "@/app/home/_views/hero.section"
import DesignsCarouselSection from "@/app/home/_views/designs-carousel.section"
import TechStackSection from "@/app/home/_views/TechStack.section"
import AnimationWorksSection from "@/app/home/_views/animation-work.section"
import ProjectsSection from "@/app/home/_views/projects.section"
import FooterSection from "@/app/home/_views/Footer.section"
import React from "react"

export default function HomeClient() {


	return (
		<main className="h-full py-32 px-4 md:px-32 smd:px-44 flex flex-col gap-y-8">


			<HeroSection />

			<TechStackSection />

			<ProjectsSection/>

			<DesignsCarouselSection />

			<AnimationWorksSection />

			<FooterSection/>

			<div className="min-h-[40vh] w-full"></div>

		</main>
	)
}
