import React from 'react';
import Sidebar from '../Sidebar';
import css from './index.module.css';
import Header from '../Header';
export default function Layout({ children }) {
	return (
		<div className={css.layoutComponent}>
			<div className={css.left}></div>
			<Sidebar />
			<div className={css.right}>
				<Header />
				{children}
			</div>
		</div>
	);
}
