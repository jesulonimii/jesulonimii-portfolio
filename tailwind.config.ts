const COLORS = require("./app/_commons/utils/colors")


/** @type {import("tailwindcss").Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./app/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			"outfit": ["Outfit"],
			"sans": ["Titillium Web", "Inter"],
		},
		extend: {
			colors: {
				...COLORS,
			},
			screens: {
				"smd": "1160px",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
}
