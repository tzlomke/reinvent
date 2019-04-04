import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import Calendar from "./pages/Calendar";
import page404 from "./pages/404";

import "./App.css";

import { Provider } from "react-redux";
import store from "./store";
import Landing from "./pages/Landing";
import Register from "./components/authorization/Register";
import Login from "./components/authorization/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
// import Dashboard from "./components/dashboard/Dashboard";
import UserProfile from "./components/UserProfile";
// import IdeasDiscussed from "./pages/IdeasDiscussed";
import Resources from "./pages/Resources";

// Page Imports
import NewsList from "./pages/NewsList";
import Article from "./pages/Article";
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
					{/* Moved all routes into the switch so that 404 would render correctly */}
						<Switch>
							<Route exact path="/" component={Landing} />
							<Route exact path="/register" component={Register} />
							<Route exact path="/login" component={Login} />
							{/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
							<PrivateRoute path="/ideas" component={Ideas} />
							<PrivateRoute exact path="/profile/:username" component={UserProfile} />
							<PrivateRoute exact path="/calendar" component={Calendar} />
							<PrivateRoute exact path="/news-feed" component={NewsList} />
							<PrivateRoute exact path="/articles/:id" component={Article} />
							<PrivateRoute exact path="/resources" component={Resources}/>
							<Route component={page404} />
						</Switch>	
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
