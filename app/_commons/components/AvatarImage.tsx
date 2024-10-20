import { twMerge } from "tailwind-merge"
import DefaultImage from "@commons/assets/images/user-placeholder-image.png"
import Image, { ImageProps } from "next/image"

interface Props extends Omit<ImageProps, "src" | "alt"> {
	className?: string
	src?: string
	alt?: string
	online?: boolean
}

const AvatarImage = ({ className, online, src, alt, ...rest }: Props) => {
	return (
		<div className={"relative"}>
			<Image
				src={src ?? DefaultImage}
				width={500}
				height={500}
				style={{
					objectFit: "cover",
					objectPosition: "center",
				}}
				className={twMerge("aspect-square w-16 rounded-full bg-primary", className)}
				alt={alt ?? "profile-image"}
				{...rest}
			/>
			{online && (
				<div className="border-primary-dark-alt absolute -bottom-[5%] right-0 aspect-square w-3 rounded-full border bg-[#16D313FF]"></div>
			)}
		</div>
	)
}

export default AvatarImage
