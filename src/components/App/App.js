import './App.css';
import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
function App() {
	const [user, setUser] = useState({});
	return (
		<UserContext.Provider value={user}>
			<Router>
				<Switch>
					<Route path="/dashboard">
						<Dashboard />
					</Route>
					<Route path="/bloginputpage">
						<BlogInputPage />
					</Route>
					<Route path="/blogrecappage">
						<BlogRecapPage />
					</Route>
					<Route path="/register">
						<RegisterPage />
					</Route>
					<Route path="/statistics">
						<StatisticsPage />
					</Route>
					<Route path="/cloud">
						<WordCloudPage />
					</Route>
					<Route path="/adminpage">
						<AdminPage />
					</Route>
					<Route path="/forgotpassword">
						<ForgotPassPage />
					</Route>
					<Route path="/">
						<LoginPage handleAuth={setUser} />
					</Route>
				</Switch>
			</Router>
		</UserContext.Provider>
	);
}

export function useUser() {
	const test = useContext(UserContext);
	return test;
}
export default App;
