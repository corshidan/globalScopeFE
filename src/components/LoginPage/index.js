import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faAt } from '@fortawesome/free-solid-svg-icons';
import LoginAlert from '../LoginAlert/index';
import css from './index.module.css';

export default function LoginPage({ handleAuth }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [loginError, setLoginError] = useState({
		state: false,
		message: 'E-mail or password is invalid',
	});
	const history = useHistory();
	const url = 'https://global-scope.herokuapp.com/login';
	const onSubmit = (data) => {
		console.log(JSON.stringify(data));
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => {
				console.log(res.ok);
				if (!res.ok) {
					history.replace('/');
					toggleError(true);
					return;
				} else {
					return res.json();
				}
			})
			.then((response) => {
				if (response) {
					handleAuth(response.payload[0]);
					history.replace('/dashboard');
				}
			})
			.catch((err) => console.log(err));
	};
	const toggleError = (isShowed) => {
		setLoginError({ ...loginError, state: isShowed });
	};
	return (
		<div
			className={`${'flex flex-col items-center justify-center h-screen '}${css.back}`}
			style={{ backgroundImage: 'url(/images/background.jpg)' }}
		>
			<form
				className="justify-center  w-full shadow rounded-lg bg-white flex flex-col md:w-1/2 lg:w-1/3 m-auto bg-opacity-95"
				onSubmit={handleSubmit(onSubmit)}
			>
				<LoginAlert
					isOpen={loginError.state}
					closeAlert={toggleError}
					message={loginError.message}
				/>
				<div className="flex flex-col px-6">
					<h2 className="text-3xl my-4 text-purple-500 font-medium self-center">Login</h2>
					<div className="w-full p-2 justify-start flex flex-col">
						<div className=" flex flex-row">
							<span className=" rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0">
								<FontAwesomeIcon icon={faAt} />
							</span>

							{/* E-mail input */}
							<input
								className="border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-400 w-full pl-2"
								type="email"
								name="email"
								placeholder="E-mail"
								{...register('email', { required: true })}
							/>
						</div>
						{/* Display e-mail input error message */}
						{errors.email && (
							<p className="text-red-400 text-sm">Invalid email address</p>
						)}

						<div className="mt-4 flex flex-row">
							<span className="rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0">
								<FontAwesomeIcon icon={faKey} />
							</span>

							{/* Password input */}
							<input
								type="password"
								name="password"
								className="h-10 border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-300 w-full pl-2"
								placeholder="Password"
								{...register('password', {
									required: 'Password required',
									minLength: {
										value: 6,
										message: 'Password must be at least 6 characters',
									},
								})}
							/>
						</div>

						{/* Display password input error message */}
						{errors.password && (
							<p className="text-red-400 text-sm">{errors.password.message}</p>
						)}

						<span className="text-purple-400 text-sm mt-4">
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
						<p className="text-gray-400 text-sm m-3">
							Need an account?{' '}
							<Link to="/register" className="">
								<span className="text-purple-400 text-sm">Register</span>{' '}
							</Link>
						</p>
					</div>
				</div>
			</form>
		</div>
	);
}
