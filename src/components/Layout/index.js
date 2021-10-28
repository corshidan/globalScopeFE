import React from 'react';
import Sidebar from '../Sidebar';
import css from './index.module.css';
import Header from '../Header';
import Box from "@mui/material/Box";

export default function Layout({ children }) {
	return (
		<Box>
		<div className={css.layoutComponent}>
			<div className={css.left}></div>
			<Sidebar />
			<div className={css.right}>
				<Header />
				{children}
			</div>
		</div>
		</Box>
	);
}
