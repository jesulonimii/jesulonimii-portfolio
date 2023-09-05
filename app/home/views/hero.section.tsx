import Emphasize from "@components/Emphasize"
import CardLayout from "@layouts/Card.layout"
import * as Lucide from "lucide-react"
import Link from "next/link"
import BgPattern from "@ui/BgPattern"
import IconStyled from "@components/IconStyled"
import Image from "next/image"
import Owner from "@/app/owner"
import CustomButton from "@ui/forms/CustomButton"

function HeroSection({}) {

	const { current_position, notice, current_work, name, socials } = Owner
	

	return (
		<section className="flex gap-10 justify-between  w-fit">

			<div className="w-[50%] h-fit flex flex-col gap-3">

				<h1 className="text-lg">
					<p>Hi 👋, I am <Emphasize>{name}</Emphasize>.</p>
					<p>I develop web and mobile applications using the <Emphasize>MERN</Emphasize> stack.</p>
					<p>I also have a flair for <Emphasize>motion graphics</Emphasize> and <Emphasize>graphic
						design</Emphasize> which i like to explore when i'm not coding.🎨</p>
					<p>I currently work as
						a <Emphasize>{current_position}</Emphasize> at <Emphasize>{current_work}</Emphasize> but
						still available for freelance & contract opportunities.👨‍💻</p>
				</h1>

				<div className="flex w-full gap-2">
					<CustomButton variant="outlined" className="w-full">
						View Resume
					</CustomButton>
					<CustomButton disabled variant="outlined" className="w-full" data-blobity-tooltip="Coming Soon...">
						Blog
					</CustomButton>
				</div>


				<CardLayout className="justify-evenly w-full h-fit my-2 gap-4 px-2">
					{
						Object.keys(socials).map((site_name, index) => {
							const site = site_name.substring(0, 1).toUpperCase() + site_name.substring(1)
							const IconTag = Lucide[site]
							return (
								<Link data-blobity href={socials[site_name]}
									  className="w-fit flex gap-2 items-center jusitfy-center cursor-pointer" target="_blank"
									  rel="noopener noreferrer" key={index}>
									<IconTag className="w-5" />
									<p>{site}</p>
								</Link>
							)
						})
					}
				</CardLayout>


				<CardLayout className="relative h-fit  bg-primary-dark" data-blobity-tooltip="Update Board" data-blobity-invert="true">
					<BgPattern className="w-full stroke-primary-alt absolute -m-4" />

					<div className="gap-2 pb-4 h-full justify-between flex flex-col text-lg text-white">
						<IconStyled icon={"MegaphoneIcon"} color={"#1b82e8"}
									className="h-10 w-10 -rotate-20" />
						{notice}
					</div>


				</CardLayout>

			</div>

			<CardLayout className="w-[50%] h-full p-0 bg-[url('/hero.png')] bg-center bg-cover bg-no-repeat"
						data-blobity-tooltip="@Jesulonimii 😎"
						data-blobity-invert="false"/>

		</section>

	)
}

export default HeroSection