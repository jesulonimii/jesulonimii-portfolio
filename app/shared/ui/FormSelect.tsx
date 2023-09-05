import {TextField, Typography} from "@mui/material";
// import {makeStyles} from "@mui/styles";
import {Controller} from "react-hook-form";
import {ReactNode} from "react";
// import { formStyles } from "./formstyle";

// const useStyles = makeStyles({
// 	textField: {
// 		backgroundColor: "#F4F4FB ",
// 		border: "1px solid #a8a8bded !important",
// 		borderRadius: "4px",
// 		"& .MuiOutlinedInput-root": {
// 			"& input": {
// 				padding: "8px 12px 10px !important",
// 			},
// 		},
// 		"& label#select-category-label": {
// 			top: "-7px !important",
// 		},
// 		"& label#subCat-label": {
// 			top: "-7px !important",
// 		},
// 		"& label#select-currency-label": {
// 			top: "-7px !important",
// 		},
// 		"& label#select-payment-method-label": {
// 			top: "-7px !important",
// 		},
// 		"& .MuiSelect-select": {
// 			padding: "9px 12px !important",
// 		},
// 		"& input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active":
// 			{
// 				backgroundColor: "#F4F4FB !important",
// 			},
// 		"&.MuiFormControl-root": {
// 			// marginTop: "0px !important",
// 		},
// 		"&.MuiFormControl-root.MuiTextField-root": {
// 			marginTop: "3px !important",
// 			// marginBottom: "10px !important",
// 		},
// 		"& input:focus, .MuiInputBase-root.MuiOutlinedInput-root textarea:focus, .MuiInputBase-root.MuiOutlinedInput-root:focus-within, .Mui-focused.MuiInputBase-root.MuiOutlinedInput-root":
// 			{
// 				boxShadow: "#147ad630 0 0 0 0.2rem, #147ad6 0 0 2px",
// 				borderColor: "#147ad6",
// 				borderRadius: "4px",
// 			},
// 		"& .MuiInputBase-root.MuiOutlinedInput-root": {
// 			padding: "0 !important",
// 		},
// 		"& .MuiInputBase-root.MuiOutlinedInput-root textarea": {
// 			padding: "16.5px 14px !important",
// 			height: "auto !important",
// 		},
// 		"& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input": {
// 			display: "flex",
// 			alignItems: "center",
// 		},
// 	},
// });

interface FormSelectProps {
	control: any;
	name: string;
	label: string;
	required?: boolean;
	disabled?: boolean;
	errors?: any;
	errorMsg?: string | null;
	defaultValue?: string;
	children: ReactNode;
}

function FormSelect({
	control,
	name,
	label,
	required = false,
	disabled = false,
	errors,
	errorMsg,
	defaultValue,
	children,
}: FormSelectProps) {
	// const classes = useStyles();

	return (
		<>
			<Controller
				name={name}
				control={control}
				defaultValue={defaultValue ?? ""}
				rules={{
					required: required,
				}}
				render={({field, fieldState: {error}}) => (
					<TextField
						{...field}
						disabled={disabled}
						margin="dense"
						id="select-category"
						fullWidth
						select
						label={label}
						// className={classes.textField}
						// error={!!error}
						// helperText={error ? errorMsg : null}
						InputLabelProps={{
							shrink: false,
							sx: {
								display: field.value ? "none" : "block",
							},
						}}
						sx={{
							background: "#202225",
							color: "#7f848e",
							borderRadius: "4px",
							outline: "none !important",
							border: "0 !important",
							":hover": {
								outline: "none !important",
								border: "0 !important",
							},
						}}>
						{children}
					</TextField>
				)}
			/>
			{errors && <Typography sx={{color: "red", fontSize: "12px"}}>{errorMsg}</Typography>}
		</>
	);
}

export default FormSelect;
