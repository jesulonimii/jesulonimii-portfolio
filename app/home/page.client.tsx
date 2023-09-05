"use client"

import HeroSection from "@/app/home/views/hero.section"
import BrandDisplaySection from "@/app/home/views/brand-display.section"
import DesignsCarouselSection from "@/app/home/views/designs-carousel.section"
import Logo from "@ui/Logo"
import TechStackSection from "@/app/home/views/TechStack.section"
import { BrandIcon } from "@assets/images"
import AnimationWorksSection from "@/app/home/views/animation-work.section"

export default function HomeClient() {


	return (
		<main className="h-full py-12 px-32 smd:px-44 flex flex-col gap-y-8">


			<HeroSection />

			<TechStackSection />

			<DesignsCarouselSection />

			<AnimationWorksSection />

			<BrandDisplaySection/>

			<div className="min-h-[40vh] w-full"></div>

		</main>
	)
}
