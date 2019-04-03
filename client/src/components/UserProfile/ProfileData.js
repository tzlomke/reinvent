import React from "react";
import moment from "moment";

const ProfileData = (props) => {
	const { userFullName, username, userID, authenticatedUserID, userCampaigns, titleInput, handleChange, authorInput, campaignInput, handleFormSubmit } = props;
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
							<h3 style={{fontFamily: "FatFont", display: "inline-block"}}>My Ideas</h3>
							<div className="mt-5" style={{display: "inline-block"}}>
								<button className="btn image-upload-modal-button modal-trigger" data-target="campaign-form-modal" style={{marginLeft: "620px", paddingBottom: "35px", display: "inline-block", height: "32px", float: "right"}}>New Idea +</button>
							</div>
							<ul className="profile-campaign-list">
								{userCampaigns.map(campaign => (
									<li className="campaign" key={campaign._id}>
										<div className="campaign-borderline"></div>
										<a className="campaign-link" href={"/ideas/" + campaign._id}>
											<div className="profile-campaign-item">
												<h4 style={{display: "inline-block"}}>{campaign.title}</h4>
												<h4 style={{display: "inline-block", float: "right"}}><em>{moment(campaign.date).format("MM DD YYYY")}</em></h4>
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
				{/* <div className= "modal" id="campaignFormModal">
					<header className ="header">New Idea</header>
					<section id="campaignEntry">
						<form id="newCampaign">
						<section id="newCampTitle">
							<label htmlFor="titleIt">Title</label>
							<input type="text" id="titleIt" name="titleInput" value={titleInput} onChange={handleChange}></input>
						</section>
						<section id="newCampAuthor">
							<h6 id="authorIt" name="authorInput">{authorInput}</h6>
						</section>
						<section id="newCampSynop">
							<label htmlFor="campaignIt">New Idea Here</label>
							<textarea id="campaignIt" name="campaignInputArea" value={campaignInput} onChange={handleChange}></textarea>
						</section>
							<button id="submitCampaign" type="submit" className="btn btn-dark modal-close" onClick = {handleFormSubmit}>Submit</button>
						</form>
					</section>
				</div> */}

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
											<h4 style={{display: "inline-block"}}>{campaign.title}</h4>
											<h4 style={{display: "inline-block", float: "right"}}><em>{moment(campaign.date).format("MM DD YYYY")}</em></h4>
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