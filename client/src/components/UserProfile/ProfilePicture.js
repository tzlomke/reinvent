import React from "react";
// import API from "../../utils/API";

const ProfilePicture = (props) => {
	const { profileImage } = props;

	// Needs: Upload and Render Image File
	// Find A Place to Host Images
	// ? Stateful or Stateless?

	return(
		<div className="profile-image-container">
			<img className="profile-image" src={profileImage} alt="Profile Pic" height="150" width ="150"></img>
		</div>
	)
};

export default ProfilePicture;