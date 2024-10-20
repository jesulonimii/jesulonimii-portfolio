import {createContext, useState} from "react";
import {createTheme} from "@mui/material";
import {COLORS} from "../utils";

export const DarkTheme = createContext(null);

export let MuiTheme = createTheme({
	typography: {
		// transform: "none",
		fontFamily: ["var(--outfit)", "Outfit"].join(","),
	},
	palette: {
		primary: {
			main: COLORS.primary,
		},
		secondary: {
			main: COLORS.secondary,
		},
	},
});
