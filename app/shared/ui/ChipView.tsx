import React from "react";
import {twMerge} from "tailwind-merge";

type ChipViewProps = {
	items: string[];
	setSelected: React.Dispatch<React.SetStateAction<string>>;
	selected: string;
	className: string;
};

const ChipView = ({items, setSelected, selected, className}: ChipViewProps) => {
	return (
		<div className={twMerge(`my-2 flex w-full ${className}`)}>
			{items.map((item, index) => {
				return (
					<div
						onClick={() => setSelected(item.toLowerCase())}
						key={index}
						className={`font-outfit border-primary text-primary min-w-24  ml-3 flex h-8 cursor-pointer items-center rounded-full border bg-opacity-30 px-4 py-2 text-sm font-medium ${
							item.toLowerCase() === selected.toLowerCase() && `bg-primary dark:text-white`
						}`}>
						{item}
					</div>
				);
			})}
		</div>
	);
};

export default ChipView;
