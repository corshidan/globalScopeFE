import './App.css';
import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import Dashboard from '../Dashboard';
import BlogInputPage from '../BlogInputPage';
import BlogRecapPage from '../BlogRecapPage';
import Login from '../Login';


function App() {
	return (
		<Router>
		  <nav>
			<ul>
			  <li>
				<Link to="/dashboard">Dashboard</Link>
			  </li>
			  <li>
				<Link to="/bloginputpage">Blog Input Page</Link>
			  </li>
			  <li>
				<Link to="/blogrecappage">Blog Recap Page</Link>
			  </li>
			</ul>
		  </nav>
  
		  {/* A <Switch> looks through its children <Route>s and
			  renders the first one that matches the current URL. */}
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
			  <Login />
			</Route>
		  </Switch>
	  </Router>
	);
}

export default App;

