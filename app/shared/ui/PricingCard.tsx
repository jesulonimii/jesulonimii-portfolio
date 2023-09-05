import {BgPattern} from "@x-deck/shared/assets/images";
import {CheckIcon} from "@x-deck/shared/assets/icons";
import CustomButton from "@x-deck/shared/ui/forms/CustomButton";

type PricingCardProps = {
	type: string;
	price: string;
	period: "year" | "month";
	cta?: string;
	ctaOnClick?: (data: any) => void;
	features_list: string[];
	popular?: boolean;
	loading: boolean;
};

const PricingCard = ({
	type = "Standard",
	price = "490",
	period = "year",
	cta = "Get Started",
	ctaOnClick = () => {},
	features_list,
	popular,
	loading,
}: PricingCardProps) => {
	return (
		<div className="relative flex h-[80vh] min-h-[70vh] w-full sm:w-[70%] md:w-1/3 flex-col overflow-clip rounded-xl border bg-bg-50 dark:border-gray-700 dark:bg-bg-dark-50">
			<div className="relative flex h-[25%] w-full flex-col items-center justify-center overflow-clip bg-primary-dark">
				<BgPattern className="absolute stroke-primary opacity-40" />

				<p className="my-2 font-outfit text-lg font-medium capitalize text-gray-300">{type}</p>
				<p className="lowercase text-white">
					<span className="font-outfit text-5xl font-bold">${price} </span> / {period}
				</p>

				{popular && (
					<span className="absolute right-0 top-7 -mr-[10%] -mt-[0%] flex w-[35%] md:w-[45%] rotate-45 items-center justify-center bg-red-800 p-1 text-center font-outfit text-xs font-medium capitalize text-white">
						Popular choice
					</span>
				)}
			</div>

			<main className="flex min-h-fit w-full flex-1 flex-col p-4">
				<ul className="flex flex-col">
					{features_list.map((item, index) => {
						return (
							<li className="my-2 flex" key={index}>
								<CheckIcon className="min-w-5 mr-1 w-5 fill-primary" />
								<span className="mx-2 w-full font-outfit text-black dark:text-gray-500">{item}</span>
							</li>
						);
					})}
				</ul>
			</main>

			<div className="absolute bottom-0 flex h-[10%] w-full flex-1 flex-col items-center justify-center px-4 pb-4">
				<CustomButton
					onClick={() =>
						ctaOnClick({
							type,
							period,
						})
					}
					className="w-full p-3"
					loading={loading}
					disabled={loading}>
					{cta}
				</CustomButton>
			</div>
		</div>
	);
};

export default PricingCard;
