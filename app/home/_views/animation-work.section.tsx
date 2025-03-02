"use client"

import CardLayout from "@commons/layouts/Card.layout"
import Marquee from "react-fast-marquee"
import Heading from "@components/Heading"
import { useEffect, useRef, useState } from "react"
import VisibilitySensor from "react-visibility-sensor"


function AnimationWorksSection({}) {

	const [videos, setVideos] = useState([])

	const videoRef = useRef(null)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		if (isVisible) {
			videoRef.current.play()
		} else {
			if (videoRef.current?.play) {
				videoRef.current.pause()
			}
		}
	}, [isVisible])

	useEffect(() => {
		//@ts-ignore
		const videosInFolder = require.context("@/public/videos/spotlight/", false, /\.(mp4)$/)
		const videosInFolderParsed = videosInFolder.keys().filter(name => !name.includes("app"))

		const videoList = videosInFolderParsed.map(video => videosInFolder(video).default.replace("_next/videos", "videos/spotlight"))

		setVideos(videoList)
	}, [])

	return (
		<section className="flex flex-col md:flex-row-reverse gap-10 justify-between my-[8%] items-center">

			<div className="w-full md:w-[40%] flex flex-col gap-1">

				<p>I give life to designs through ...</p>

				<Heading>
					Logo Animations and Motion Graphics
					<span className="text-primary">  Designs!</span>
				</Heading>

				{/*<Link className="w-full max-w-[80%] mt-8" href="/projects/design">
					<CustomButton className="w-full" data-blobity-invert="true">
						View Design Projects
					</CustomButton>
				</Link>*/}


			</div>

			<CardLayout className="p-0 h-fit w-full md:w-[60%] flex flex-col">

				<div className="w-full h-fit bg-bg-50 dark:bg-bg-dark-50 justify-between flex flex-col gap-4">
					<Marquee pauseOnHover speed={50}>
						{videos.map((src, i) => (
							<CardLayout key={i}
										className={`p-0 mr-1 rounded-none rounded-b-xl bg-center w-[50vh] aspect-square`}>

								<VisibilitySensor onChange={(isVisible) => setIsVisible(isVisible)}>
									<video ref={videoRef} webkit-playsinline controlsList="nodownload" autoPlay muted
										   loop playsInline className="w-full h-full">
										<source src={src} type="video/mp4" />
									</video>
								</VisibilitySensor>

							</CardLayout>
						))}
					</Marquee>
				</div>

			</CardLayout>

		</section>

	)
}

export default AnimationWorksSection
