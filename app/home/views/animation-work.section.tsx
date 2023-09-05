import CardLayout from "@layouts/Card.layout"
import Image from "next/image"
import Marquee from "react-fast-marquee"
import Heading from "@components/Heading"
import CustomButton from "@ui/forms/CustomButton"
import Link from "next/link"
import { useEffect, useState } from "react"

//@ts-ignore
const videosInFolder = require.context("@app/../public/videos/spotlight/", false, /\.(mp4)$/)
const videosInFolderParsed = videosInFolder.keys().filter(name => !name.includes("app"))

const videoList = videosInFolderParsed.map(video => videosInFolder(video).default.replace("_next/videos", "videos/spotlight"))




function AnimationWorksSection({}) {

	const [videos, setVideos] = useState(videoList)


	return (
		<section className="flex flex-row-reverse gap-10 justify-between my-[8%] items-center">

			<div className="w-[40%] flex flex-col gap-1">

				<p>I give life to designs through ...</p>

				<Heading>
					Animations and Motion Graphics
					<span className="text-primary">  Designs!</span>
				</Heading>

				{/*<Link className="w-full max-w-[80%] mt-8" href="/projects/design">
					<CustomButton className="w-full" data-blobity-invert="true">
						View Design Projects
					</CustomButton>
				</Link>*/}


			</div>

			<CardLayout className="p-0 h-fit w-[60%] flex flex-col">

				<div className="w-full h-fit bg-bg-50 dark:bg-bg-dark-50 justify-between flex flex-col gap-4">
					<Marquee pauseOnHover speed={50}>
						{videos.map((src, i) => (
							<CardLayout key={i}
										className={`p-0 mr-1 rounded-none rounded-b-xl bg-center w-[50vh] aspect-square`}>

								<video autoPlay muted loop className="w-full h-full" >
									<source src={src} type="video/mp4"/>
								</video>

							</CardLayout>
						))}
					</Marquee>
				</div>

			</CardLayout>

		</section>

	)
}

export default AnimationWorksSection