import React from 'react';
import Sidebar from '../Sidebar';
import css from './index.module.css';
export default function Layout({ children }) {
	return (
		<div className={css.layoutComponent}>
			<Sidebar />
			<div className={css.right}>{children}</div>
		</div>
	);
}
