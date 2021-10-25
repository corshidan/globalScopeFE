import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCalendarAlt,
	faIdBadge,
	faSignature,
	faAt,
	faCalendarWeek,
} from '@fortawesome/free-solid-svg-icons';
import css from './index.module.css';
export default function RegisterPage() {
	const date = new Date();
	const today = date.toISOString().slice(0, 10);
	console.log(today);
	return (
		<div
			className={`${'flex items-center justify-center h-screen  '}${css.back}`}
			style={{ backgroundImage: 'url(/images/background.jpg)' }}
		>
			<form className="justify-center items-center w-full shadow rounded-lg bg-white px-6 flex flex-col md:w-1/2 lg:w-1/5 m-auto bg-opacity-95">
				<h2 className="text-3xl my-4 text-purple-500 font-medium leading-6">
					Create a new account
				</h2>
				<div id="whoobe-h90kl" className="w-full p-2 justify-start flex flex-col">
					<div className="my-2 flex flex-row">
						<span className="rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0">
							<FontAwesomeIcon icon={faSignature} />
						</span>
						<input
							className="border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-400 w-full pl-1"
							pattern="[A-Za-z]"
							required
							placeholder="First name"
						/>

						<input
							className="border border-gray-200 rounded-lg outline-none focus:ring-1 ring-blue-400 w-full pl-1 ml-1"
							required
							placeholder="Last name"
						/>
					</div>

					<div class="my-3 flex flex-row">
						<span
							className="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0"
							mode="render"
						>
							<FontAwesomeIcon icon={faAt} />
						</span>
						<input
							className="border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-400 w-full pl-1"
							type="email"
							required
							placeholder="Email"
						/>
					</div>

					<div className="mt-3 mb-4 flex flex-row">
						<span className="rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0">
							<FontAwesomeIcon icon={faCalendarAlt} />
						</span>
						<input
							className="border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-400 w-full pl-1 pr-1"
							type="number"
							min="0"
							max="5"
							required
							placeholder="Reflection Frequency"
						/>
					</div>
					<p className="text-gray-400 text-center mb-1">
						Bootcamper ID and bootcamp start date
					</p>
					<div className="mb-3 flex flex-row">
						<span
							id="whoobe-4occ6"
							className=" rounded-l-lg w-14 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0"
						>
							<FontAwesomeIcon icon={faIdBadge} />
						</span>
						<input
							type="text"
							className="h-10 border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-300 w-1/2 pl-1 mr-1"
							placeholder="ID"
							required
						/>
						<span
							id="whoobe-4occ6"
							className=" rounded-l-lg w-14 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0 ml-2"
						>
							<FontAwesomeIcon icon={faCalendarWeek} />
						</span>
						<input
							type="date"
							className="h-10 border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-300 w-3/4 pl-4"
							placeholder="Start Date"
							defaultValue={today}
							required
						/>
					</div>

					<div className="my-3 flex flex-row">
						<span className=" rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0">
							<FontAwesomeIcon icon={faIdBadge} />
						</span>
						<input
							type="password"
							className="h-10 border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-300 w-full pl-1"
							placeholder="Password"
							required
						/>
					</div>
					<button
						type="submit"
						className="px-4 py-2 rounded bg-purple-500 text-white hover:bg-purple-700 my-4 w-full"
					>
						<Link to="/dashboard" className="">
							Sign Up
						</Link>
					</button>

					<p className="text-purple-400 text-xs m-3">
						<Link to="/" className="">
							Already have an account?
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
}
