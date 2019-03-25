import React, { Component } from "react";
import API from "../../utils/API";
import ProfileData from "./ProfileData";
import ProfilePicture from "./ProfilePicture";

class UserProfile extends Component {

	state = {
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
		console.log(username)
		API.getUser(username)
			.then(response => {
				let userData = response.data[0]
				this.setState({
					userFullName: `${userData.firstName} ${userData.lastName}`,
					username: userData.username,
					userCampaigns: response.data.campaigns,
					// profileImage: response.profileImage,
				});
			});
	};

	componentDidMount = () => {
		this.loadUser();
	};

	render() {
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

export default UserProfile;