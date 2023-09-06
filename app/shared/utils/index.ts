import clsx, { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export { default as blobityConfig } from "./blobity.config";
export { default as COLORS } from "./colors";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const HEX2RGBA = (hex, alpha = 1) => {
	if (hex.length < 6 || hex.length > 7) {
		return `rgba(1, 1, 1, ${alpha})`;
	} else {
		const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
		return `rgba(${r},${g},${b},${alpha})`;
	}
};

export const stringToBoolean = (stringValue) => {
	switch (stringValue?.toString().toLowerCase()?.trim()) {
		case "true":
		case "yes":
		case "1":
		case true:
			return true;

		case "false":
		case "no":
		case "0":
		case null:
		case false:
		case undefined:
			return false;

		default:
			return JSON.parse(stringValue);
	}
};
