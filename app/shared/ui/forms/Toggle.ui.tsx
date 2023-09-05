'use client'

import {useState} from "react";

const Toggle = (props) => {
    const {
        className = '',
        checked = false,
        disabled = false,
        onClick = () => {}
    } = props

	const [toggle_id, setToggleId] = useState(Math.floor(Math.random() * 20000))

    return (
		<>
			<label htmlFor={`switch-${toggle_id}`} className="relative inline-flex items-center cursor-pointer">
				<input
					id={`switch-${toggle_id}`}
					type="checkbox"
					value=""
					className={`sr-only peer ${disabled && 'cursor-not-allowed'}`}
					checked={checked}
					disabled={disabled}
					onChange={onClick}
				/>
				<div
					className={`w-11 h-6 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary ${disabled && 'cursor-not-allowed'}`}></div>
			</label>
		</>
	);
}


export default Toggle;