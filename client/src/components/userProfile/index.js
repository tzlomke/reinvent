import React, { Component } from "react";
import API from "../../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import ProfileData from "./ProfileData";
import ProfilePicture from "./ProfilePicture";


class UserProfile extends Component {

	state = {
		userID: "",
		userFullName: "",
		username: "",
		userCampaigns: [],
		profileImage: "https://avatars0.githubusercontent.com/u/38269347?s=460&v=4"
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	loadUser = () => {
		let userParam = this.props.location.pathname;
		let username = userParam.split("/")[2];
		API.getUser(username)
			.then(response => {
				let userData = response.data[0]
				this.setState({
					userID: userData._id,
					userFullName: `${userData.firstName} ${userData.lastName}`,
					username: userData.username,
					userCampaigns: userData.campaigns,
					profileImage: userData.profileImage,
				});
			});
	};

	componentDidMount = () => {
		this.loadUser();
	};

	render() {
		const { user } = this.props.auth;
		console.log(user);

		return(
			<div className="profile-wrapper">
				<ProfilePicture 
					profileImage = {this.state.profileImage}
				/>

				<ProfileData 
					userFullName = {this.state.userFullName}
					username = {this.state.username}
					userCampaigns = {this.state.userCampaigns}
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