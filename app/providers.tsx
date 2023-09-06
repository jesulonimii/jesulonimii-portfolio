"use client";

import "@assets/globals.css";
import { useEffect, useState } from "react";
import { DarkTheme } from "@context";
import { IconlyProvider } from "react-iconly";
import { blobityConfig, COLORS } from "@utils"
import useBlobity from "blobity/lib/react/useBlobity";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Script from "next/script"

const queryClient = new QueryClient();

const Providers = ({ children }) => {
	const [darkMode, setDarkMode] = useState(true);
	const [theme, setTheme] = useState("");


	const blobity = useBlobity(blobityConfig);


	useEffect(() => {
		if (localStorage.getItem("darkMode") === "true") {
			setDarkMode(true);
		} else {
			setDarkMode(false);
		}
	}, []);

	useEffect(() => {
		if (darkMode) {
			setTheme("dark");
		} else {
			setTheme("");
		}
	}, [darkMode]);


	return (
		<QueryClientProvider client={queryClient}>
			<DarkTheme.Provider value={{ darkMode, setDarkMode }}>

				<Script
					src="https://app.aichatbot.so/scripts/aichatbotso-widget.js"
					type="text/javascript"
					data-width="30%"
					data-name="aichatbotso"
					data-address="https://app.aichatbot.so"
					data-id="6892cecd-091a-41fc-9352-3694fff797df" >
				</Script>

				{/*@ts-ignore*/}
				<IconlyProvider
					set="light"
					stroke="regular"
					primaryColor={COLORS.icon.dark}>
					<html lang="en" className={`${theme}`}>
					{children}
					</html>
				</IconlyProvider>
			</DarkTheme.Provider>
		</QueryClientProvider>

	);
};

export default Providers;
