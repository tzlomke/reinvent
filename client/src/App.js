import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import Calendar from "./pages/Calendar";

import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/Header";
import DynamicNavbar from "./components/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/authorization/Register";
import Login from "./components/authorization/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import UserProfile from "./components/UserProfile";
// import IdeasDiscussed from "./pages/IdeasDiscussed";

// Page Imports
import NewsList from "./pages/NewsList";
import Ideas from "./pages/Ideas";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
	// Set auth token header auth
	const token = localStorage.jwtToken;
	setAuthToken(token);
	// Decode token and get user info and exp
	const decoded = jwt_decode(token);
	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));
	// Check for expired token
	const currentTime = Date.now() / 1000; // to get in milliseconds
	if (decoded.exp < currentTime) {
		// Logout user
		store.dispatch(logoutUser());
		// Redirect to login
		window.location.href = "./login";
	}
}

class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="App">
						<Header />
						<DynamicNavbar />
						<Route exact path="/" component={Landing} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
						<Switch>
							<PrivateRoute exact path="/dashboard" component={Dashboard} />
							<PrivateRoute path="/ideas" component={Ideas} />
							<PrivateRoute exact path="/profile/:username" component={UserProfile} />
							<PrivateRoute exact path="/calendar" component={Calendar} />
							<PrivateRoute exact path="/news-feed" component={NewsList} />
	        			</Switch>	
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
