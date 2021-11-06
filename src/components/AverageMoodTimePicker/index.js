import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './index.css';
import { getPreviousDate } from '../../libs/helperFunctions';
export default function AverageMoodTimePicker({ changeDate }) {
	const [inputLabel, setInputLabel] = useState('All');
	const handleChange = (event) => {
		changeDate(days[event.target.value]);
		setInputLabel(event.target.value);
	};
	const days = {
		'Since yesterday': getPreviousDate(),
		'Last 3 days': getPreviousDate(3),
		'Last 7 days': getPreviousDate(7),
		All: '2010-01-01',
	};
	return (
		<FormControl sx={{ minWidth: 120 }} className="self-end">
			<Select value={inputLabel} onChange={handleChange} displayEmpty>
				<MenuItem value="Since yesterday">Since yesterday</MenuItem>
				<MenuItem value="Last 3 days">Last 3 days</MenuItem>
				<MenuItem value="Last 7 days">Last 7 days</MenuItem>
				<MenuItem value="All">All</MenuItem>
			</Select>
		</FormControl>
	);
}
