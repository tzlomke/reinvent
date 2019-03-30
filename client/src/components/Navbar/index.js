import React, { Component } from "react";
import API from "../../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from "./Navbar";

class DynamicNavbar extends Component {

	state = {
		username: "",
		profileRoute: ""
	};

	loadUser = () => {
		let authenticatedUserId = this.props.auth.user.id
		console.log(this.props.auth.user.id);
			API.getUserById(authenticatedUserId)
				.then(response => {
					let userData = response.data[0]
					console.log(userData);
					this.setState({
						username: userData.username,
						profileRoute: "/profile/" + userData.username
					});
				});
	};
	
	componentDidMount = () => {
		this.loadUser();
	};

	render() {
		// const { user } = this.props.auth;
		return (
			<Navbar
				profileRoute={this.state.profileRoute}
			/>
		)
	}
};

DynamicNavbar.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  	auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(DynamicNavbar);