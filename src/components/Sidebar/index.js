import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars, faBrain, faChartLine } from '@fortawesome/free-solid-svg-icons';
import css from './sidebar.module.css';
const styles =
	'flex  flex-col justify-center items-center mb-7 font-bold break-all text-center text-xl';
export default function Sidebar() {
	return (
		<div className={css.sidebar}>
			<div className={styles}>
				<p>Bootcamper</p>
				<p>Dashboard</p>
			</div>

			<ul className={css.navigation}>
				<li className="rounded-l-full hover:bg-green-400 hover:text-white duration-300">
					<Link to="/dashboard">
						<FontAwesomeIcon size="sm" icon={faChartLine} />
						<span className="ml-2">Dashboard</span>
					</Link>
				</li>
				<li className="rounded-l-full hover:bg-green-400 hover:text-white duration-300">
					<Link to="/bloginputpage">
						<FontAwesomeIcon size="sm" icon={faBrain} />
						<span className="ml-2">Add Reflection</span>
					</Link>
				</li>
				<li className="rounded-l-full hover:bg-green-400 hover:text-white duration-300">
					<Link to="/blogrecappage">
						<FontAwesomeIcon size="sm" icon={faBinoculars} />
						<span className="ml-2">Review Reflections</span>
					</Link>
				</li>
			</ul>
		</div>
	);
}
