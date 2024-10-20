//
import React from "react"
import CustomButton from "./CustomButton"

interface StepsButtons {
	backFunc: () => void
	nextFunc: () => void
}

function StepsButtons({ backFunc, nextFunc }: StepsButtons) {
	return (
		<div className="index-[1000] fixed bottom-0 left-0 flex h-[70px] w-full items-center justify-between border-t border-t-[#242930] bg-[#060A16] px-10">
			<CustomButton onClick={backFunc} border={true} variant="primary" className="bg-[#242930]">
				Back
			</CustomButton>
			<CustomButton onClick={nextFunc} variant="gradient">
				Continue
			</CustomButton>
		</div>
	)
}

export default StepsButtons
