import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './index.css';

export default function AverageMoodTimePicker() {
	const [age, setAge] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	return (
		<FormControl sx={{ minWidth: 120 }}>
			<Select value={age} onChange={handleChange} displayEmpty>
				<MenuItem value="">Feeling</MenuItem>
				<MenuItem value={10}>Yesterday</MenuItem>
				<MenuItem value={20}>Last 3 days</MenuItem>
				<MenuItem value={30}>Last Week</MenuItem>
				<MenuItem value={40}>All</MenuItem>
			</Select>
		</FormControl>
	);
}
