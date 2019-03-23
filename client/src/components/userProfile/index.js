import React, { Component } from "react";
import API from "../../utils/API";
import ProfileData from "./ProfileData";
import ProfilePicture from "./ProfilePicture";

class UserProfile extends Component {

	state = {
		userFullName: "Taylor Zlomke",
		username: "tzlomke",
		userCampaigns: [
			{
				title: "More Recycling",
				author: "Taylor Zlomke"
			},
			{
				title: "Employee BBQ",
				author: "Taylor Zlomke"
			}
		],
		profileImage: "https://avatars0.githubusercontent.com/u/38269347?s=460&v=4"
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	// loadUser = () => {
	// 	API.getUser()
	// 		.then(response => {
	// 			this.setState({
	// 				userFullName: response.fullName,
	// 				username: response.username,
	// 				userCampaigns: response.campaigns,
	// 				profileImage: response.profileImage,
	// 			});
	// 		});
	// };

	componentDidMount = () => {
		// this.loadUser();
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