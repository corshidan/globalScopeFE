import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function AverageMoodTimePicker({ placeholder }) {
	const [age, setAge] = React.useState('');
	const [open, setOpen] = React.useState(false);

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<div>
			<FormControl sx={{ minWidth: 120, height: 20 }}>
				<InputLabel id="demo-controlled-open-select-label" sx={{ padding: 0 }}>
					{placeholder}
				</InputLabel>
				<Select
					labelId="demo-controlled-open-select-label"
					id="demo-controlled-open-select"
					open={open}
					onClose={handleClose}
					onOpen={handleOpen}
					value={age}
					label="Feeling"
					onChange={handleChange}
					sx={{ padding: 0 }}
				>
					<MenuItem value={5}>Yesterday</MenuItem>
					<MenuItem value={10}>Last 3 days</MenuItem>
					<MenuItem value={20}>Last Week</MenuItem>
					<MenuItem value={30}>All</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
}
