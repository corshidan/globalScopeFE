import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
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
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const date = new Date();
	const today = date.toISOString().slice(0, 10);
	const history = useHistory();
	const url = 'http://localhost:5000/auth/register';
	const onSubmit = (data) => {
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				history.replace('/');
			})
			.catch((err) => console.log(err));
	};
	return (
		<div
			className={`${'flex items-center justify-center h-screen  '}${css.back}`}
			style={{ backgroundImage: 'url(/images/backgroundBro.jpg)' }}
		>
			<form
				className="justify-center items-center w-full shadow rounded-lg bg-white px-6 flex flex-col md:w-1/2 lg:w-2/5 m-auto bg-opacity-95"
				onSubmit={handleSubmit(onSubmit)}
			>
				<h2 className="text-3xl my-4 text-purple-500 font-medium leading-6">
					Create a new account
				</h2>
				<div id="whoobe-h90kl" className="w-full p-2 justify-start flex flex-col">
					<div className="my-2 flex ">
						<div className="flex flex-col w-1/2">
							<div className="flex">
								{' '}
								<span className="rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0">
									<FontAwesomeIcon icon={faSignature} />
								</span>
								{/* First name input */}
								<input
									className="border border-gray-300 rounded-r-lg outline-none focus:ring-1 ring-blue-400 w-full pl-1"
									placeholder="First name"
									name="firstname"
									{...register('firstname', {
										required: 'First name is required',
									})}
								/>
							</div>
							{errors.firstname && (
								<p className="text-red-400 text-sm">{errors.firstname.message}</p>
							)}
						</div>
						{/* Last name input */}
						<div className="flex flex-col w-1/2 h-10 ml-2">
							<div className="flex">
								<span className="rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0">
									<FontAwesomeIcon icon={faSignature} />
								</span>
								<input
									className="border border-gray-300 rounded-lg outline-none focus:ring-1 ring-blue-400 w-full pl-1 ml-1"
									placeholder="Last name"
									name="lastname"
									{...register('lastname', {
										required: 'Last name is required',
									})}
								/>
							</div>
							{errors.lastname && (
								<p className="text-red-400 text-sm">{errors.lastname.message}</p>
							)}
						</div>
					</div>

					<div className="mt-3 flex flex-row">
						<span className="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0">
							<FontAwesomeIcon icon={faAt} />
						</span>
						{/* E-mail input */}
						<input
							className="border border-gray-300 rounded-r-lg outline-none focus:ring-1 ring-blue-400 w-full pl-1"
							type="email"
							placeholder="Email"
							name="email"
							{...register('email', { required: 'E-mail is required' })}
						/>
					</div>
					{errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}

					<div className="mt-3  flex flex-row">
						<span className="rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0">
							<FontAwesomeIcon icon={faCalendarAlt} />
						</span>
						{/* Reflection frequency input */}
						<input
							className="border border-gray-300 rounded-r-lg outline-none focus:ring-1 ring-blue-400 w-full pl-1 pr-1"
							type="number"
							min="0"
							max="5"
							placeholder="Reflection Frequency"
							name="frequency"
							{...register('frequency', {
								required: 'Reflection frequency is required',
								valueAsNumber: true,
								minLength: {
									value: 1,
									message: 'Reflection Frequency must be at least 1',
								},
							})}
						/>
					</div>
					{errors.frequency && (
						<p className="text-red-400 text-sm">{errors.frequency.message}</p>
					)}
					<p className="text-gray-400  mt-2">Bootcamper ID and bootcamp start date</p>
					<div className="mb-3 flex flex-row ">
						<div className="flex flex-col ">
							<div className="flex ">
								<span className=" rounded-l-lg  h-10 w-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0">
									<FontAwesomeIcon icon={faIdBadge} />
								</span>
								{/* Bootcamper ID input */}
								<input
									type="text"
									className="h-10 border border-gray-300 rounded-r-lg w-1/2 xl:w-full outline-none focus:ring-1 ring-blue-300  pl-1 mr-1"
									placeholder="ID"
									name="bootcamperid"
									{...register('bootcamperid', {
										required: 'Bootcamper ID is required',
									})}
								/>
							</div>
							{errors.bootcamperId && (
								<p className="text-red-400 text-sm">
									{errors.bootcamperId.message}
								</p>
							)}
						</div>

						<div className="flex">
							<div className="flex">
								<span className=" rounded-l-lg w-14 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0 ml-2">
									<FontAwesomeIcon icon={faCalendarWeek} />
								</span>
								{/* Start date input */}
								<input
									type="date"
									className="h-10 border border-gray-300 rounded-r-lg outline-none focus:ring-1 ring-blue-300 pl-4"
									placeholder="Start Date"
									defaultValue={today}
									name="startdate"
									{...register('startdate', {
										required: 'Start date is required',
										// valueAsDate: true,
									})}
								/>
							</div>
							{errors.startDate && (
								<p className="text-red-400 text-sm">{errors.startDate.message}</p>
							)}
						</div>
					</div>

					<div className="mt-3 flex flex-row">
						<span className=" rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0">
							<FontAwesomeIcon icon={faIdBadge} />
						</span>
						{/* Password input */}
						<input
							type="password"
							className="h-10 border border-gray-300 rounded-r-lg outline-none focus:ring-1 ring-blue-300 w-full pl-1"
							placeholder="Password"
							name="password"
							{...register('password', {
								required: 'Password required!',
								minLength: {
									value: 6,
									message: 'Password must be at least 6 characters',
								},
							})}
						/>
					</div>
					{errors.password && (
						<p className="text-red-400 text-sm">{errors.password.message}</p>
					)}
					<button
						type="submit"
						className="px-4 py-2 rounded bg-purple-500 text-white hover:bg-purple-700 my-4 w-full"
					>
						{/* <Link to="/dashboard" className=""> */}
						Sign Up
						{/* </Link> */}
					</button>

					<p className="text-purple-400 text-sm m-3">
						<Link to="/" className="">
							Already have an account?
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
}
