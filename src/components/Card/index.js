import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ image, title, buttonLabel, path }) {
	return (
		<div className=" flex justify-center items-center">
			<div className="flex flex-col items-center bg-white shadow-md border border-gray-200 rounded-lg   w-1/3 ">
				<img className="rounded-t-lg w-3/4" src={image} alt="" />

				<div className="flex flex-col items-center p-5">
					<h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
						{title}
					</h5>

					<Link
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
						to={path}
					>
						{buttonLabel}
					</Link>
				</div>
			</div>
		</div>
	);
}
