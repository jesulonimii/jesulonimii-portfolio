// import Link from "next/link";
import CustomButton from "./forms/CustomButton";

function AddOnCard({data}) {
	return (
		<div className="space-y-5 flex justify-between  text-black dark:text-gray-500 sm:w-[70%] w-full flex-col p-4 rounded-xl border bg-bg-50 dark:border-gray-700 dark:bg-bg-dark-50">
			<h3 className="text-2xl font-semibold">{data.title}</h3>
			<p>{data.description}</p>

			{data.message1 ? (
				<div className="flex items-center gap-2">
					<p>{data.message1}</p>
					<input
						type="text"
						className="w-[60px] rounded-md dark:bg-[#323232] p-1"
						placeholder={data.placeholder}
					/>
					<p>{data.message2}</p>
				</div>
			) : null}

			{data.id !== 3 && <p className="font-bold text-lg">{data.total}</p>}

			{data.id === 3 && (
				<p className="font-bold text-2xl">
					{data.total}
					<span className="font-normal text-base">/month</span>
				</p>
			)}

			<a href={"https://app.aichatbot.so/login"}>
				<CustomButton className="w-full">Get Add-on</CustomButton>
			</a>
		</div>
	);
}

export default AddOnCard;
