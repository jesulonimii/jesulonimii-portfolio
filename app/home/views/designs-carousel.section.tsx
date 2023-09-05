import CardLayout from "@layouts/Card.layout"
import Image from "next/image"
import Marquee from "react-fast-marquee"
import Heading from "@components/Heading"
import CustomButton from "@ui/forms/CustomButton"
import Link from "next/link"

//@ts-ignore
const imagesInFolder = require.context("@app/../public/images/designs", false, /\.(png|jpe?g|svg)$/)
const imageList = imagesInFolder.keys().map(image => imagesInFolder(image))

function DesignsCarouselsSection({}) {

	//@ts-ignore
	const imagesInFolder = require.context("@app/../public/images/designs", false, /\.(png|jpe?g|svg)$/)
	const images = imagesInFolder.keys().map(image => imagesInFolder(image).default)


	const images2 = [
		"/greybox.jpg",
		"/lm7.jpg",
		"/qps.jpg",
		"/swiss.jpg",
		"/zcamp.jpg",
	]

	return (
		<section className="flex gap-10 justify-between my-[8%] items-center">

			<div className="w-[40%] flex flex-col gap-1">

				<p>I make expressions through ...</p>

				<Heading>
					Graphic and Brand
					<span className="text-primary"> Designs!</span>
				</Heading>

				<Link className="w-full max-w-[80%] mt-8" href="/projects/design">
					<CustomButton className="w-full" data-blobity-invert="true">
						View Design Projects
					</CustomButton>
				</Link>


			</div>

			<CardLayout className="p-0 h-fit w-[60%] flex flex-col">

				<div className="w-full h-fit bg-bg-50 dark:bg-bg-dark-50 justify-between flex flex-col gap-4">
					<Marquee pauseOnClick speed={50}>
						{images.map((src, i) => (
							<CardLayout key={i}
										className={`p-0 mr-1 rounded-none rounded-b-xl bg-center w-[20vh] aspect-square`}>

								<Image
									src={src}
									className="w-full h-full object-cover"
									width="0"
									height="0"
									sizes="100vw"
									alt={"Jesulonimi's Design works"} />

							</CardLayout>
						))}
					</Marquee>

					<Marquee pauseOnClick direction="right" speed={50}>
						{images.map((src, i) => (
							<CardLayout key={i}
										className={`p-0 mr-1 rounded-none rounded-t-xl bg-center w-[20vh]  aspect-square`}>

								<Image
									src={src}
									className="w-full h-full object-cover"
									width="0"
									height="0"
									sizes="100vw"
									alt={"Jesulonimi's Design works"} />

							</CardLayout>
						))}
					</Marquee>
				</div>

			</CardLayout>

		</section>

	)
}

export default DesignsCarouselsSection