import Emphasize from "@components/Emphasize"
import CardLayout from "@layouts/Card.layout"
import * as Lucide from "lucide-react"
import Link from "next/link"
import BgPattern from "@ui/BgPattern"
import IconStyled from "@components/IconStyled"
import Image from "next/image"
import Owner from "@/app/owner"

function BrandDisplaySection({}) {

	const { current_position, notice, current_work, name, socials } = Owner
	

	return (
		<section className="flex gap-10 justify-between">

			<CardLayout className="p-0 h-[40vh] w-full bg-[url('/brand-screen.png')] bg-center bg-cover"
						data-blobity-tooltip="The Jesulonimii Brand"
						data-blobity-invert="true">

				{/*<Image priority={true}
					   src="/brand-screen.png"
					   className="w-full h-[50vh] bg-center bg-cover"
					   width="0"
					   objectFit="cover"
					   objectPosition="center"
					   height="0"
					   sizes="100vw"
					   alt={"william"} />*/}

			</CardLayout>

		</section>

	)
}

export default BrandDisplaySection