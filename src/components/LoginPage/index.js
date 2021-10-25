import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';

export default function LoginPage() {
	// <div className="flex items-center justify-center h-screen">
	// 	<input type="text" placeholder="Login details"></input>

	// </div>
	return (
		<div className="flex items-center justify-center h-screen">
			<form
				id="whoobe-t7qyk"
				class="justify-center items-center w-full shadow rounded-lg bg-white px-6 flex flex-col md:w-1/2 lg:w-1/5 m-auto"
			>
				<h2 class="text-2xl my-4">Login</h2>
				<div id="whoobe-h90kl" class="w-full p-2 justify-start flex flex-col">
					<div id="whoobe-7izhv" class=" flex flex-row">
						<span
							id="whoobe-plfl9"
							class="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0"
							mode="render"
							block=""
						>
							{' '}
							<FontAwesomeIcon icon={faUser} />
						</span>
						<input
							class="border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-400 w-full pl-1"
							id=""
							name=""
							required="false"
							placeholder="Username"
						/>
					</div>

					<div id="whoobe-l6k6r" class="my-4 flex flex-row">
						<span
							id="whoobe-4occ6"
							class="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0"
							mode="render"
							block=""
						>
							<FontAwesomeIcon icon={faKey} />
						</span>
						<input
							type="password"
							class="h-10 border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-300 w-full pl-1"
							id=""
							name=""
							placeholder="Password"
							required="false"
						/>
					</div>
					<Link to="/dashboard" className="">
						<p className="text-blue-400 text-xs">Forgot your password?</p>
					</Link>
					<button
						value="button"
						class="px-4 py-2 rounded bg-blue-400 text-white hover:bg-blue-700 my-4 w-full"
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
