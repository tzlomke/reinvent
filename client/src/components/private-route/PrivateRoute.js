import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "../Header";
import DynamicNavbar from "../Navbar"

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			auth.isAuthenticated === true ? (
				<div>
					<Header />
					<DynamicNavbar />
					<Component {...props} />
				</div>
			) : (
				<Redirect to="/" />
			)
		}
	/>
);

PrivateRoute.propTypes = {
  	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
 	auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);