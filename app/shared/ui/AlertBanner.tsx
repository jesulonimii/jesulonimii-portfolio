import emoji from 'react-easy-emoji'
import {BgPattern} from '../assets/images'
import {twMerge} from "tailwind-merge";

type AlertBannerProps = {
	className? : string,
	type : "error" | "success" | "warning" | "info" | "primary"
	icon? : any
	children : any
}

function AlertBanner({className = "", type = "error", icon = null, children} : AlertBannerProps) {
    


    const typeStyle = {
        error: "bg-red-100 border-red-400 text-red-700",
        success: "bg-green-100 border-green-400 text-green-700",
        warning: "bg-yellow-100 border-yellow-400 text-yellow-700",
        info: "bg-blue-100 border-blue-400 text-blue-700",
		primary : "bg-primary-dark border-primary text-white",
    }


    return (
        <div className={twMerge(`${typeStyle[type]} font-medium font-outfit flex border justify-center items-center text-center p-2 w-full min-h-[5vh] h-fit rounded-lg relative overflow-clip ${className}`)}>
            {icon && <div className="mr-2">{icon}</div>}
            {emoji(children)}
			<BgPattern className="stroke-primary absolute opacity-40" />
		</div>
    );
}


export default AlertBanner;