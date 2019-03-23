import React, { Component } from "react";
import API from "../../utils/API";

class ProfileData extends Component {

	state = {
		userInformation: {},
		userBio: "",
		userCampaigns: {},
		userVotes: {}
	};

	// Needs: Render User Info, Render User Campaign Data as Links, (Other Campaigns User Participates In? Upload and Render Bio?)
	// ? Stateful or Stateless?

	render() {
		return(
			<div></div>
		);
	};
};

export default ProfileData;