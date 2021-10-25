import React from 'react';
import { Link } from 'react-router-dom';
import css from './sidebar.module.css';
const styles = 'mb-7 font-bold break-all text-center text-xl';
export default function Sidebar() {
	return (
		<div className={css.sidebar}>
			<div className={styles}>
				<p>Bootcamper</p>
				<p>Dashboard</p>
			</div>

			<Link to="/dashboard">Dashboard</Link>
			<Link to="/bloginputpage">Blog Input Page</Link>
			<Link to="/blogrecappage">Blog Recap Page</Link>
		</div>
	);
}
