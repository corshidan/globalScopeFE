import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars, faBrain, faChartLine } from '@fortawesome/free-solid-svg-icons';
import css from './sidebar.module.css';
import { useUser } from '../App/App.js';


export default function Sidebar() {
	const user = useUser();
	const location = useLocation();
	const sideBarTitle =
		'flex  text-xs flex-col justify-center items-center mb-7 font-bold text-white md:text-base lg:text-xl';
	const listStyle = 'rounded-l-full text-white hover:bg-green-400 duration-300 ';

	return (
		<div className={css.sidebar}>
			<section id="dashboardTitle" className={sideBarTitle}>
				{user.firstname ? <p>{`${user.firstname}'s`}</p> : <p>Bootcamper's</p>}
				<p>Dashboard</p>
				<img src="/images/32.png" alt="" />
			</section>

			<ul className={css.navigation}>
				<li
					className={`${listStyle}${
						location.pathname === '/dashboard' ? 'bg-white text-purple-800' : ''
					}`}
				>
					<Link to="/dashboard">
						<p className="">
							<FontAwesomeIcon size="sm" icon={faChartLine} />
							<span className="ml-2">Dashboard</span>
						</p>
					</Link>
				</li>
				<li
					className={`${listStyle}${
						location.pathname === '/bloginputpage' ? 'bg-white text-purple-800' : ''
					}`}
				>
					<Link to="/bloginputpage">
						<p>
							<FontAwesomeIcon size="sm" icon={faBrain} />
							<span className="ml-2">Add To Blog</span>
						</p>
					</Link>
				</li>
				<li
					className={`${listStyle}${
						location.pathname === '/blogrecappage' ? 'bg-white text-purple-800' : ''
					}`}
				>
					<Link to="/blogrecappage">
						<p>
							<FontAwesomeIcon size="sm" icon={faBinoculars} />
							<span className="ml-2">Blog Recap</span>
						</p>
					</Link>
				</li>
			</ul>
		</div>
	);
}
