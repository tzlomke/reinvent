import React from "react";

const ProfileData = (props) => {
	const { userFullName, username, userID, authenticatedUserID, userCampaigns } = props;
	// Needs: Render User Info, Render User Campaign Data as Links, (Other Campaigns User Participates In? Upload and Render Bio?)
	if (userID === authenticatedUserID) {
		return(
			// User Data
			<div>
				<div>
					<header>
						<h6>{userFullName} | {username} </h6>
					</header>
					<section className="user-data">
						<div className="user-campaigns">
							<h3 style={{fontFamily: "FatFont"}}>My Ideas</h3>
							<ul className="profile-campaign-list">
								{userCampaigns.map(campaign => (
									<li className="campaign" key={campaign._id}>
										<div className="campaign-borderline"></div>
										<a className="campaign-link" href={"/ideas/" + campaign._id}>
											<div className="profile-campaign-item">
												<h4>{campaign.title}</h4>
												<p className="synopsis">{campaign.synopsis}</p>
											</div>
										</a>
									</li>
								))}		
							</ul>
						</div>
					</section>
				</div>
				
				{/* New Idea Modal */}
				<div className= "modal" id="campaignFormModal">
					<header className ="header">New Idea</header>
					<section id="campaignEntry">
						<form id="newCampaign">
						<section id="newCampTitle">
							<label htmlFor="titleIt">Title</label>
							<input type="text" id="titleIt" name="titleInput" value={props.titleInput} onChange={props.handleChange}></input>
						</section>
						<section id="newCampAuthor">
							<h6 id="authorIt" name="authorInput">{props.authorInput}</h6>
						</section>
						<section id="newCampSynop">
							<label htmlFor="campaignIt">New Idea Here</label>
							<textarea id="campaignIt" name="campaignInputArea" value={props.campaignInput} onChange={props.handleChange}></textarea>
						</section>
							<button id="submitCampaign" type="submit" className="btn btn-dark modal-close" onClick = {props.handleFormSubmit}>Submit</button>
						</form>
					</section>
				</div>

			</div>
		);
	} else {
		return(
			<div>
				<header>
					<h6>{userFullName} | {username} </h6>
				</header>
				<section className="user-data">
					<div className="user-campaigns">
						<h3 style={{fontFamily: "FatFont"}}>{username}'s Ideas</h3>
						<ul className="profile-campaign-list">
							{userCampaigns.map(campaign => (
								<li className="campaign" key={campaign._id}>
									<div className="campaign-borderline"></div>
									<a className="campaign-link" href={"/ideas/" + campaign._id}>
										<div className="profile-campaign-item">
											<h4>{campaign.title}</h4>
											<p className="synopsis">{campaign.synopsis}</p>
										</div>
									</a>
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