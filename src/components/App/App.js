import './App.css';
import React, { useState, createContext, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../Dashboard';
import BlogInputPage from '../BlogInputPage';
import BlogRecapPage from '../BlogRecapPage';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';
import StatisticsPage from '../StatisticsPage';
import WordCloudPage from '../WordCloudPage';
import ForgotPassPage from '../ForgotPassPage';
import AdminPage from '../AdminPage';

const UserContext = createContext();
const AuthContext = createContext();

function App() {
	const [user, setUser] = useState({});
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const checkAuthenticated = async () => {
		try {
			const res = await fetch('http://localhost:5000/auth/verify', {
				method: 'POST',
				headers: { token: localStorage.token },
			});

			const parseRes = await res.json();
			parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		checkAuthenticated();
	}, []);

	const setAuth = (boolean) => {
		setIsAuthenticated(boolean);
	};
	return (
		<AuthContext.Provider value={setAuth}>
			<UserContext.Provider value={user}>
				<Router>
					<Switch>
						<Route
							exact
							path="/dashboard"
							render={(props) =>
								isAuthenticated ? (
									<Dashboard {...props} handleAuth={setUser} />
								) : (
									<Redirect to="/" />
								)
							}
						/>

						<Route
							exact
							path="/bloginputpage"
							render={(props) =>
								isAuthenticated ? <BlogInputPage {...props} /> : <Redirect to="/" />
							}
						/>

						<Route
							exact
							path="/blogrecappage"
							render={(props) =>
								isAuthenticated ? <BlogRecapPage {...props} /> : <Redirect to="/" />
							}
						/>

						<Route path="/register">
							<RegisterPage setAuth={setAuth} />
						</Route>
						<Route
							exact
							path="/statistics"
							render={(props) =>
								isAuthenticated ? (
									<StatisticsPage {...props} />
								) : (
									<Redirect to="/" />
								)
							}
						/>
						<Route
							exact
							path="/cloud"
							render={(props) =>
								isAuthenticated ? <WordCloudPage {...props} /> : <Redirect to="/" />
							}
						/>
						<Route
							exact
							path="/adminpage"
							render={(props) =>
								isAuthenticated ? <AdminPage {...props} /> : <Redirect to="/" />
							}
						></Route>
						<Route path="/forgotpassword">
							<ForgotPassPage />
						</Route>
						<Route
							exact
							path="/"
							render={(props) =>
								!isAuthenticated ? (
									<LoginPage {...props} handleAuth={setUser} setAuth={setAuth} />
								) : (
									<Dashboard {...props} handleAuth={setUser} />
								)
							}
						></Route>
					</Switch>
				</Router>
			</UserContext.Provider>
		</AuthContext.Provider>
	);
}

export function useUser() {
	const test = useContext(UserContext);
	return test;
}
export function useAuth() {
	const setAuth = useContext(AuthContext);
	return setAuth;
}
export default App;
