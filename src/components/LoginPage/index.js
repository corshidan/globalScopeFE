import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faAt } from '@fortawesome/free-solid-svg-icons';
import css from './index.module.css';

const initialState = { email: '', password: '' };
export default function LoginPage() {
	const [formValues, setFormValues] = useState(initialState);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	function handleChange(e) {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	}
	function handleSubmit(e) {
		e.preventDefault();
		setFormErrors(validate(formValues));
		setIsSubmit(true);
	}
	useEffect(() => {
		console.log(formErrors);
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			// console.log(formValues);
		}
	}, [formErrors, isSubmit]);
	function validate(values) {
		const errors = {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.email) {
			errors.email = 'Email is required';
		} else if (!regex.test(values.email)) {
			errors.email = 'Email is not valid';
		}
		if (!values.password) {
			errors.password = 'Password is required';
		} else if (values.password.length < 6) {
			errors.password = 'Password is too short ';
		}
		return errors;
	}
	return (
		<div
			className={`${'flex flex-col items-center justify-center h-screen '}${css.back}`}
			style={{ backgroundImage: 'url(/images/background.jpg)' }}
		>
			{/* <p className="text-white">{JSON.stringify(formValues, undefined, 2)}</p> */}
			<form
				className="justify-center items-center w-full shadow rounded-lg bg-white px-6 flex flex-col md:w-1/2 lg:w-1/3 m-auto bg-opacity-95"
				onSubmit={handleSubmit}
			>
				<h2 className="text-3xl my-4 text-purple-500 font-medium ">Login</h2>
				<div className="w-full p-2 justify-start flex flex-col">
					<div className=" flex flex-row">
						<span className=" rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0">
							<FontAwesomeIcon icon={faAt} />
						</span>
						<input
							className="border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-400 w-full pl-2"
							type="email"
							name="email"
							value={formValues.email}
							onChange={handleChange}
							placeholder="E-mail"
						/>
					</div>
					<p className="text-red-400 text-xs">{formErrors.email}</p>

					<div className="mt-4 flex flex-row">
						<span className="rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0">
							<FontAwesomeIcon icon={faKey} />
						</span>
						<input
							type="password"
							name="password"
							className="h-10 border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-300 w-full pl-2"
							value={formValues.password}
							onChange={handleChange}
							placeholder="Password"
						/>
					</div>
					<p className="text-red-400 text-xs">{formErrors.password}</p>

					<span className="text-purple-400 text-xs mt-4">
						<Link to="/dashboard" className="">
							Forgot your password?
						</Link>
					</span>

					{/* <Link to="/dashboard" className=""> */}
					<button
						type="submit"
						className="px-4 py-2 rounded bg-purple-500 text-white hover:bg-purple-700 my-4 w-full"
					>
						Login
					</button>
					{/* </Link> */}
					<p className="text-gray-400 text-xs m-3">
						Need an account?{' '}
						<Link to="/register" className="">
							<span className="text-purple-400 text-xs">Register</span>{' '}
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
}
