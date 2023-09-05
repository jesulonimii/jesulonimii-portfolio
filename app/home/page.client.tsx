"use client"

import HeroSection from "@/app/home/views/hero.section"
import BrandDisplaySection from "@/app/home/views/brand-display.section"
import DesignsCarouselSection from "@/app/home/views/designs-carousel.section"
import Logo from "@ui/Logo"
import TechStackSection from "@/app/home/views/TechStack.section"
import { BrandIcon } from "@assets/images"

export default function HomeClient() {


	return (
		<main className="h-[150vh] py-12 px-32 smd:px-44 flex flex-col gap-y-8">

			<div className="w-full flex gap-2 justify-center items-center mb-12">
				<p>Jesulonimii</p>
				<BrandIcon className="w-10"/>
				<p>William</p>
			</div>

			<HeroSection />

			<TechStackSection />

			<DesignsCarouselSection />

			<BrandDisplaySection/>

			<div className="min-h-[40vh] w-full"></div>

		</main>
	)
}
