import React from 'react';
import { Link } from 'react-router-dom';
export default function Sidebar() {
	return (
		<div>
			<Link to="/dashboard">Dashboard</Link>
			<Link to="/bloginputpage">Blog Input Page</Link>
			<Link to="/blogrecappage">Blog Recap Page</Link>
		</div>
	);
}
