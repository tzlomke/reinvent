import React, { Component } from "react";
import API from "../../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import ProfileData from "./ProfileData";
import ProfilePicture from "./ProfilePicture";
import ImageUpload from "./ImageUpload";

class UserProfile extends Component {

	state = {
		userFullName: "",
		username: "",
		userCampaigns: [],
		profileImage: ""
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	onLogoutClick = event => {
		event.preventDefault();
		this.props.logoutUser();
	};

	loadUser = () => {
		let userParam = this.props.location.pathname;
		let username = userParam.split("/")[2];
		API.getUserByUsername(username)
			.then(response => {
				let userData = response.data[0]
				this.setState({
					userID: userData._id,
					userFullName: `${userData.firstName} ${userData.lastName}`,
					username: userData.username,
					userCampaigns: userData.campaigns,
					profileImage: userData.profileImage[userData.profileImage.length-1],
				});
			});
	};

	componentDidMount = () => {
		this.loadUser();
	};

	render() {
		const { user } = this.props.auth

		return(
			<div className="profile-wrapper">
				<ProfilePicture 
					profileImage = {this.state.profileImage}
				/>

				<ImageUpload />

				<ProfileData 
					authenticatedUserID = {user.id}
					userID = {this.state.userID}
					userFullName = {this.state.userFullName}
					username = {this.state.username}
					userCampaigns = {this.state.userCampaigns}
					logout = {this.onLogoutClick}
				/>
			</div>
		)
	};
}

UserProfile.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  	auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(UserProfile);