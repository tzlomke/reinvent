import React from "react";

const ProfileData = (props) => {
	const { userFullName, username, userID, authenticatedUserID, userCampaigns } = props;

	// Needs: Render User Info, Render User Campaign Data as Links, (Other Campaigns User Participates In? Upload and Render Bio?)
	if (userID === authenticatedUserID) {
		return(
			<div>
				<header>
					<h1>{userFullName}</h1>
					<h4>{username}</h4>
				</header>
				<section className="user-data">
					<div className="user-campaigns">
						<h3>My Ideas</h3>
						<ul className="campaign-list">
							{userCampaigns.map(campaign => (
								<li className="campaign" key={campaign.id}>
									{campaign.title}
								</li>
							))}		
						</ul>
					</div>
				</section>
			</div>
		);
	} else {
		return(
			<div>
				<header>
					<h1>{userFullName}</h1>
					<h4>{username}</h4>
				</header>
				<section className="user-data">
					<div className="user-campaigns">
						<h3>{userFullName}'s Ideas</h3>
						<ul className="campaign-list">
							{userCampaigns.map(campaign => (
								<li className="campaign" key={campaign.id}>
									{campaign.title}
								</li>
							))}		
						</ul>
					</div>
				</section>
			</div>
		);
	}
	
};

export default ProfileData;