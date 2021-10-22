import { Link } from 'react-router-dom';

export default function LoginPage() {
	return (
		<>
			<input type="text" placeholder="Login details"></input>;
			<Link to="/dashboard">
				<button>Login</button>
			</Link>
		</>
	);
}
