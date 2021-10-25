import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faAt } from '@fortawesome/free-solid-svg-icons';
import css from './index.module.css';
export default function LoginPage() {
	// <div className="flex items-center justify-center h-screen">
	// 	<input type="text" placeholder="Login details"></input>

	// </div>
	return (
		<div className={`${'flex items-center justify-center h-screen '}${css.back}`}>
			<form className="justify-center items-center w-full shadow rounded-lg bg-white px-6 flex flex-col md:w-1/2 lg:w-1/5 m-auto bg-gray-100">
				<h2 className="text-2xl my-4">Login</h2>
				<div className="w-full p-2 justify-start flex flex-col">
					<div className=" flex flex-row">
						<span className=" rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0">
							<FontAwesomeIcon icon={faAt} />
						</span>
						<input
							className="border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-400 w-full pl-1"
							type="email"
							required
							placeholder="E-mail"
						/>
					</div>

					<div className="my-4 flex flex-row">
						<span className="rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0">
							<FontAwesomeIcon icon={faKey} />
						</span>
						<input
							type="password"
							className="h-10 border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-300 w-full pl-1"
							placeholder="Password"
							required
						/>
					</div>

					<span className="text-blue-400 text-xs ">
						<Link to="/dashboard" className="">
							Forgot your password?
						</Link>
					</span>

					<button
						value="button"
						className="px-4 py-2 rounded bg-blue-400 text-white hover:bg-blue-700 my-4 w-full"
						id="whoobe-ibemp"
					>
						<Link to="/dashboard" className="">
							Login
						</Link>
					</button>
					<p className="text-gray-400 text-xs">
						Need an account?{' '}
						<Link to="/register" className="">
							<span className="text-blue-400 text-xs">Register</span>{' '}
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
}
