import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars, faBrain, faChartLine } from '@fortawesome/free-solid-svg-icons';
import css from './sidebar.module.css';
export default function Sidebar() {
	const location = useLocation();
	const sideBarTitle =
		'flex  text-xs flex-col justify-center items-center mb-7 font-bold md:text-base lg:text-xl';
	const listStyle = 'rounded-l-full hover:bg-green-400 hover:text-white duration-300 ';
	return (
		<div className={css.sidebar}>
			<section id="dashboardTitle" className={sideBarTitle}>
				<p>Bootcamper</p>
				<p>Dashboard</p>
				<img src="/images/32.png" alt="" />
			</section>

			<ul className={css.navigation}>
				<li
					className={`${listStyle}${
						location.pathname === '/dashboard' ? 'bg-green-400' : ''
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
						location.pathname === '/bloginputpage' ? 'bg-green-400' : ''
					}`}
				>
					<Link to="/bloginputpage">
						<p>
							<FontAwesomeIcon size="sm" icon={faBrain} />
							<span className="ml-2">Add Reflection</span>
						</p>
					</Link>
				</li>
				<li
					className={`${listStyle}${
						location.pathname === '/blogrecappage' ? 'bg-green-400' : ''
					}`}
				>
					<Link to="/blogrecappage">
						<p>
							<FontAwesomeIcon size="sm" icon={faBinoculars} />
							<span className="ml-2">Review Reflections</span>
						</p>
					</Link>
				</li>
			</ul>
		</div>
	);
}
