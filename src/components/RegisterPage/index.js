import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faIdBadge, faSignature, faAt } from '@fortawesome/free-solid-svg-icons';
export default function RegisterPage() {
	return (
		<div className="flex items-center justify-center h-screen">
			<form className="justify-center items-center w-full shadow rounded-lg bg-white px-6 flex flex-col md:w-1/2 lg:w-1/5 m-auto">
				<h2 className="text-2xl my-4">Create a new account</h2>
				<div id="whoobe-h90kl" className="w-full p-2 justify-start flex flex-col">
					<div className="my-2 flex flex-row">
						<span className="rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0">
							<FontAwesomeIcon icon={faSignature} />
						</span>
						<input
							className="border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-400 w-full pl-1"
							required
							placeholder="First name"
						/>
					</div>

					<div className="my-2 flex flex-row">
						<span className=" rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0">
							{' '}
							<FontAwesomeIcon icon={faSignature} />
						</span>
						<input
							className="border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-400 w-full pl-1"
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

					<div className="my-3 flex flex-row">
						<span className="rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0">
							<FontAwesomeIcon icon={faCalendarAlt} />
						</span>
						<input
							className="border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-400 w-full pl-1"
							type="number"
							min="0"
							max="5"
							required
							placeholder="Reflection Frequency"
						/>
					</div>

					<div className="my-3 flex flex-row">
						<span
							id="whoobe-4occ6"
							className=" rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0"
						>
							<FontAwesomeIcon icon={faIdBadge} />
						</span>
						<input
							type="text"
							className="h-10 border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-300 w-full pl-1"
							placeholder="Bootcamper ID"
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
						value="button"
						className="px-4 py-2 rounded bg-blue-400 text-white hover:bg-blue-700 my-4 w-full"
						id="whoobe-ibemp"
					>
						<Link to="/dashboard" className="">
							<p>Create a new account</p>
						</Link>
					</button>
					<Link to="/" className="">
						<p className="text-blue-400 text-xs">Already have an account?</p>
					</Link>
				</div>
			</form>
		</div>
	);
}
