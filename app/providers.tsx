"use client"

import "@assets/globals.css"
import { IconlyProvider } from "react-iconly"
import { blobityConfig, COLORS } from "@utils"
import useBlobity from "blobity/lib/react/useBlobity"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Script from "next/script"
import { retrieveSettings, useSettingsStore } from "@store/settings.store"

const queryClient = new QueryClient()
retrieveSettings().then(console.log)

const Providers = ({ children }) => {
	const { darkMode } = useSettingsStore()

	const blobity = useBlobity(blobityConfig)

	return (
		<QueryClientProvider client={queryClient}>

			<Script
				src={"https://app.aichatbot.so/scripts/aichatbotso-widget.js"}
				type="text/javascript"
				data-width="30%"
				data-name="aichatbotso"
				data-address="https://app.aichatbot.so"
				data-id="9426249b-4fba-4a9e-bff9-1baaf436cac6">
			</Script>

			{/*@ts-ignore*/}
			<IconlyProvider
				set="light"
				stroke="regular"
				primaryColor={COLORS.icon.dark}>
				<html lang="en" className={darkMode ? "dark" : ""}>
				{children}
				</html>
			</IconlyProvider>

		</QueryClientProvider>

	)
}

export default Providers
