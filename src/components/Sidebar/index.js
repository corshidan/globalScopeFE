import React, { useEffect, useRef } from 'react';
import { Link, useLocation, useHistory, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBinoculars,
	faBrain,
	faChartLine,
	faCogs,
	faSignOutAlt,
	faChartPie,
	faCloud,
} from '@fortawesome/free-solid-svg-icons';
import css from './sidebar.module.css';
import { useUser, useAuth } from '../App/App.js';
import lottie from 'lottie-web';

export default function Sidebar() {
	const container = useRef(null);
	const user = useUser();
	const setAuth = useAuth();
	const location = useLocation();
	const sideBarTitle =
		'flex  text-xs flex-col justify-center items-center text-center mb-7 pl-1 font-bold text-white md:text-base lg:text-xl';
	const listStyle = 'rounded-l-full text-white hover:bg-green-400 duration-300 ';

	const logout = () => {
		try {
			localStorage.removeItem('token');
			setAuth(false);
			<Redirect to="/" />;
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		const anim = lottie.loadAnimation({
			container: container.current,
			path: '/images/33645-happy-dog.json',
			renderer: 'svg',
		});
		anim.setSpeed(4);
	}, []);

	return (
		<div className={css.sidebar}>
			<section className={sideBarTitle}>
				{user.firstname ? <p>{`${user.firstname}'s`}</p> : <p>Bootcamper's</p>}
				<p className="w-full">Dashboard</p>
				<img src="/images/32.png" alt="" />
			</section>
			<div className="flex flex-col justify-between h-full pb-10">
				<ul className={css.navigation}>
					{user.role !== 'admin' && (
						<>
							{' '}
							{/* Dashboard */}
							<li
								className={`${listStyle}${
									location.pathname === '/dashboard'
										? 'bg-white text-purple-800'
										: ''
								}`}
							>
								<Link to="/dashboard">
									<p className="">
										<FontAwesomeIcon size="sm" icon={faChartLine} />
										<span className="ml-2">Dashboard</span>
									</p>
								</Link>
							</li>
							{/* Blog Input */}
							<li
								className={`${listStyle}${
									location.pathname === '/bloginputpage'
										? 'bg-white text-purple-800'
										: ''
								}`}
							>
								<Link to="/bloginputpage">
									<p>
										<FontAwesomeIcon size="sm" icon={faBrain} />
										<span className="ml-2">Add To Blog</span>
									</p>
								</Link>
							</li>
							{/* Blog Recap */}
							<li
								className={`${listStyle}${
									location.pathname === '/blogrecappage'
										? 'bg-white text-purple-800'
										: ''
								}`}
							>
								<Link to="/blogrecappage">
									<p>
										<FontAwesomeIcon size="sm" icon={faBinoculars} />
										<span className="ml-2">Blog Recap</span>
									</p>
								</Link>
							</li>
							{/* Statistics  */}
							<li
								className={`${listStyle}${
									location.pathname === '/statistics'
										? 'bg-white text-purple-800'
										: ''
								}`}
							>
								<Link to="/statistics">
									<p>
										<FontAwesomeIcon size="sm" icon={faChartPie} />
										<span className="ml-2">Stats</span>
									</p>
								</Link>
							</li>
						</>
					)}
					{/* Admin page */}
					{user.role === 'admin' && (
						<li
							className={`${listStyle}${
								location.pathname === '/adminpage' ? 'bg-white text-purple-800' : ''
							}`}
						>
							<Link to="/adminpage">
								<p>
									<FontAwesomeIcon size="sm" icon={faChartLine} />
									<span className="ml-2">Admin Stats</span>
								</p>
							</Link>
						</li>
					)}
					{/* Word Cloud */}
					<li
						className={`${listStyle}${
							location.pathname === '/cloud' ? 'bg-white text-purple-800' : ''
						}`}
					>
						<Link to="/cloud">
							<p>
								<FontAwesomeIcon size="xs" icon={faCloud} />
								<span className="ml-2">Word Cloud</span>
							</p>
						</Link>
					</li>
				</ul>
				{/* Bottom links */}
				<ul className={css.navigation}>
					<li
						className={`${listStyle}${
							location.pathname === '/settings' ? 'bg-white text-purple-800' : ''
						}`}
					>
						<p onClick={logout} className={css.bottomList}>
							<FontAwesomeIcon size="xs" icon={faCogs} />
							<span className="ml-2">Settings</span>
						</p>
						{/* </Link to=/Login> */}
					</li>
					<li className={`${listStyle}`}>
						<p onClick={logout} className={css.bottomList}>
							<FontAwesomeIcon size="sm" icon={faSignOutAlt} />
							<span className="ml-2">Logout</span>
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
}
