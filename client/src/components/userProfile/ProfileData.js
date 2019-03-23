import React, { Component } from "react";
// import API from "../../utils/API";

const ProfileData = (props) => {
	const { userFullName, username, userOwnedCampaings, userParticipatingCampaigns } = props;

	// Needs: Render User Info, Render User Campaign Data as Links, (Other Campaigns User Participates In? Upload and Render Bio?)
	// ? Stateful or Stateless?


	return(
		<div>

			<header>
				<h1>{userFullName}</h1>
				<h4>{username}</h4>
			</header>

			<section className="user-data">

				<div className="user-campaigns">

					<h3>My Campaigns</h3>
					<ul className="campaign-list">
						{userOwnedCampaings.map(campaign => (
							<li className="campaign" key={campaign.id}>
								{campaign.title}
							</li>
						))}		
					</ul>
					
					<h3>Other Campaigns</h3>
					<ul className="campaign-list">
						{userParticipatingCampaigns.map(campaign => (
							<li className="campaign" key={campaign.id}>
								{campaign.title}
							</li>
						))}
					</ul>
					
				</div>

			</section>

		</div>
	);
};

export default ProfileData;