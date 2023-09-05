import {useEffect, useState} from "react";

import DropdownMenu from "./DropdownMenu";
import {useSearchParams} from "react-router-dom";
import {useSearchParams as useNextSearchParams} from "next/navigation";

import {LANGUAGES} from "../utils";

type LanguageSelectorPropTypes = {
	defaultLanguage : string
	set : any
	selector? : React.ReactElement
	params? : any
}

function LanguageSelector({defaultLanguage = "English", set, selector = null }: LanguageSelectorPropTypes) {
	let searchParams = null;
	
	try {
		[searchParams] = useSearchParams();
	} catch (e){
		searchParams = useNextSearchParams();
	}

	const [language, setLanguage] = useState(LANGUAGES.find((lang) => lang.name === defaultLanguage)?.value || "en");

	const langURL = searchParams.get("lang");

	useEffect(() => {
		if (langURL) {
			setLanguage(langURL);
		}
	}, [langURL]);

	const handleLanguageSelect = (value) => {
		setLanguage(value);
		if (set) {
			set(LANGUAGES.find((item) => item.value === value).value);
		}
	};

	let current_language = LANGUAGES.find((lang) => lang.value === language);
	//remove current language from the list to populate menu
	let filtered_languages = LANGUAGES.filter((lang) => lang.value !== language);

	return (
		<div className="w-full flex items-center justify-center gap-2">
			<DropdownMenu
				menuItemWidth="20vw"
				className="w-full"
				items={filtered_languages}
				onClick={handleLanguageSelect}
				currentItem={current_language?.name ? current_language?.name : "selected Item"}
				noItemMessage="No Languages Available"
				selector={selector}
			/>
		</div>
	);
}

export default LanguageSelector;
