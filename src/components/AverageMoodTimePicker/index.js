import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './index.css';

export default function AverageMoodTimePicker({ changeDate }) {
	const handleChange = (event) => {
		changeDate(event.target.value);
	};
	const today = Date.now();
	const oneDay = 86400000;
	const formatDate = (date) => {
		return date.toISOString().slice(0, 10);
	};
	return (
		<FormControl sx={{ minWidth: 120 }}>
			<Select value={2} onChange={handleChange} displayEmpty>
				<MenuItem value={2}>Feeling</MenuItem>
				<MenuItem value={formatDate(new Date(today - oneDay))}>Since yesterday</MenuItem>
				<MenuItem value={formatDate(new Date(today - oneDay * 3))}>Last 3 days</MenuItem>
				<MenuItem value={formatDate(new Date(today - oneDay * 7))}>Last 7 days</MenuItem>
				<MenuItem value={'2010-01-01'}>All</MenuItem>
			</Select>
		</FormControl>
	);
}
