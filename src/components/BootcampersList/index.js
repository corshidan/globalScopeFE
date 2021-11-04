import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import AverageMoodTimePicker from '../AverageMoodTimePicker';
function TablePaginationActions(props) {
	const theme = useTheme();
	const { count, page, rowsPerPage, onPageChange } = props;

	const handleFirstPageButtonClick = (event) => {
		onPageChange(event, 0);
	};

	const handleBackButtonClick = (event) => {
		onPageChange(event, page - 1);
	};

	const handleNextButtonClick = (event) => {
		onPageChange(event, page + 1);
	};

	const handleLastPageButtonClick = (event) => {
		onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
	};

	return (
		<Box sx={{ flexShrink: 0, ml: 2.5 }}>
			<IconButton
				onClick={handleFirstPageButtonClick}
				disabled={page === 0}
				aria-label="first page"
			>
				{theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
			</IconButton>
			<IconButton
				onClick={handleBackButtonClick}
				disabled={page === 0}
				aria-label="previous page"
			>
				{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
			</IconButton>
			<IconButton
				onClick={handleNextButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="next page"
			>
				{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
			</IconButton>
			<IconButton
				onClick={handleLastPageButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="last page"
			>
				{theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
			</IconButton>
		</Box>
	);
}

TablePaginationActions.propTypes = {
	count: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
};

export default function BootcamperList({ allReflections, handleBootcamperChange }) {
	const [bootcampers, setBootcampers] = useState([]);
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const calculateAverageFeeling = (id) => {
		const averageFeeling = allReflections
			.filter((item) => item.bootcamperid === id)
			.map((item) => item.overallfeeling)
			.reduce((sum, item, index, arr) => {
				if (index === arr.length - 1) {
					return (sum + item) / arr.length;
				}
				return item + sum;
			}, 0);
		return averageFeeling;
	};
	const rows = bootcampers
		.map((row, i) => {
			return {
				id: row.bootcamperId,
				firstname: row.firstname,
				lastname: row.lastname,
				feel: calculateAverageFeeling(row.bootcamperId),
			};
		})
		.sort((a, b) => (a.feel < b.feel ? -1 : 1));
	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	useEffect(() => {
		fetch('https://global-scope.herokuapp.com/bootcampers?admin=true')
			.then((res) => res.json())
			.then((result) => {
				const test = result.payload.filter((bootcamper) =>
					allReflections.some((reflection) => {
						return reflection.bootcamperid === bootcamper.bootcamperId;
					})
				);
				setBootcampers(test);
			})
			.catch((err) => console.log(err));
	}, [allReflections]);
	return (
		<TableContainer component={Paper}>
			<Table sx={{ maxWidth: 600 }} aria-label="custom pagination table">
				<TableRow className="bg-gray-100 text-gray-200" sx={{ height: 40, padding: 0 }}>
					<TableCell component="th" style={{ width: 50 }} sx={{ padding: 0 }}>
						ID
					</TableCell>
					<TableCell component="th" sx={{ padding: 0 }}>
						First Name
					</TableCell>
					<TableCell component="th" sx={{ padding: 0 }}>
						Last Name
					</TableCell>
					<TableCell component="th" style={{ width: 120 }} sx={{ padding: 0 }}>
						<AverageMoodTimePicker placeholder="Feeling" />
					</TableCell>
				</TableRow>
				<TableBody>
					{(rowsPerPage > 0
						? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
						: rows
					).map((row, i) => (
						<TableRow
							key={i}
							onClick={(e) => handleBootcamperChange(e, row.id)}
							className="hover:bg-green-100 cursor-pointer"
							style={{ height: 33 }}
						>
							<TableCell sx={{ padding: 0 }}>{row.id}</TableCell>
							<TableCell sx={{ padding: 0 }} style={{ width: 160 }}>
								{row.firstname}
							</TableCell>
							<TableCell sx={{ padding: 0 }} style={{ width: 160 }}>
								{row.lastname}
							</TableCell>
							<TableCell sx={{ padding: 0 }} style={{ width: 160 }} align="center">
								{row.feel}
							</TableCell>
						</TableRow>
					))}

					{emptyRows > 0 && (
						<TableRow style={{ height: 53 * emptyRows }}>
							<TableCell colSpan={6} />
						</TableRow>
					)}
				</TableBody>
				<TableFooter sx={{ padding: 0 }}>
					<TableRow className="bg-gray-100" sx={{ padding: 0 }}>
						<TablePagination
							rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
							colSpan={3}
							count={rows.length}
							rowsPerPage={rowsPerPage}
							page={page}
							SelectProps={{
								inputProps: {
									'aria-label': 'rows per page',
								},
								native: true,
							}}
							onPageChange={handleChangePage}
							onRowsPerPageChange={handleChangeRowsPerPage}
							ActionsComponent={TablePaginationActions}
							className="bg-gray-100"
							sx={{ padding: 0 }}
						/>
					</TableRow>
				</TableFooter>
			</Table>
		</TableContainer>
	);
}
