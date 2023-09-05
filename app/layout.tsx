import "@assets/fonts/fonts.css";
import Providers from "@/app/providers";
import { COLORS } from "@utils";
import { Metadata } from "next";
import ThemeBar from "@components/ThemeBar";
import Header from "@components/Header"

const site_owner = "Jesulonimii";
const title = "William Jesulonimi Abodunrin's Portfolio";
const description = "Jesulonimi is a software engineer.";
const OgImage = "/images/og-image.png";
const portfolio_url = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
	metadataBase: new URL(portfolio_url),
	title: title,
	description: description,
	themeColor: COLORS.primary,
	openGraph: {
		title: title,
		description: description,
		url: portfolio_url,
		siteName: site_owner,
		images: [OgImage],
	},
	twitter: {
		card: "summary_large_image",
		title: title,
		description: description,
		creator: site_owner,
		images: [OgImage],
	},
};

export default function RootLayout({ children }) {
	return (
		<Providers>
			<body className={"font-sans bg-white dark:bg-bg-dark text-text-base dark:text-text-base-dark"}>
				<Header/>
				{children}
				<ThemeBar />
			</body>
		</Providers>
	);
}
