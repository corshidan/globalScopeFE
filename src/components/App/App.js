import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from '../Dashboard';
import BlogInputPage from '../BlogInputPage';
import BlogRecapPage from '../BlogRecapPage';
import LoginPage from '../LoginPage';

function App() {
	return (
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
				<Route path="/">
					<LoginPage />;
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
