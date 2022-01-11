import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faAt } from '@fortawesome/free-solid-svg-icons';
import LoginAlert from '../LoginAlert/index';
import css from './index.module.css';

export default function LoginPage({ setAuth }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [loginError, setLoginError] = useState({
		state: false,
		message: 'E-mail or password is invalid',
	});
	const url = 'http://localhost:5000/auth/login';
	const onSubmit = (data) => {
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(async (res) => {
				if (!res.ok) {
					const response = await res.json();
					toggleError(true, response);
					return;
				} else {
					return res.json();
				}
			})
			.then((response) => {
				if (response.jwtToken) {
					localStorage.setItem('token', response.jwtToken);
					setAuth(true);
				} else {
					setAuth(false);
					<Redirect to="/dashboard" />;
				}
			})
			.catch((err) => console.log(err));
	};
	const toggleError = (isShowed, message = 'E-mail or password is invalid') => {
		setLoginError({ ...loginError, state: isShowed, message: message });
	};
	return (
		<div
			className={`${'flex flex-col items-center justify-center h-screen '}${css.back}`}
			style={{ backgroundImage: 'url(/images/backgroundBro.jpg)' }}
		>
			<form
				className="justify-center  w-full shadow rounded-lg bg-white flex flex-col md:w-1/2 lg:w-1/3 m-auto bg-opacity-95"
				onSubmit={handleSubmit(onSubmit)}
			>
				<LoginAlert
					class="XXXXX"
					isOpen={loginError.state}
					closeAlert={toggleError}
					message={loginError.message}
					severity="error"
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
								dataTestId="emailInput"
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
								dataTestId="passwordInput"
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
							<Link to="/forgotpassword" className="">
								Forgot your password?
							</Link>
						</span>

						{/* <Link to="/dashboard" className=""> */}
						<button
							dataTestId="loginButton"
							type="submit"
							className="px-4 py-2 rounded bg-purple-500 text-white hover:bg-purple-700 my-4 w-full"
						>
							Login
						</button>
						{/* </Link> */}
						<p className="text-gray-400 text-sm m-3">
							Need an account?{' '}
							<Link dataTestId="registerLink" to="/register" className="">
								<span id="registerLink" className="text-purple-400 text-sm">
									Register
								</span>{' '}
							</Link>
						</p>
					</div>
				</div>
			</form>
		</div>
	);
}
