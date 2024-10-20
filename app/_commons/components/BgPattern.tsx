import { WavyPattern } from "@assets/images"
import { twMerge } from "tailwind-merge"


function BgPattern({className}) {
	return <WavyPattern className={twMerge("w-full stroke-primary", className)} />

}

export default BgPattern