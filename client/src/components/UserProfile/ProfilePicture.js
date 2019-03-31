import React from "react";
import defaultProfileImage from "../../images/lightbulbCutout.png"



const ProfilePicture = (props) => {
	const { profileImage, handleShowImageUploadModal, handleHideImageUploadModal, fileSelectionHandler, fileUploadHandler, showImageUploadModal } = props;
	console.log(defaultProfileImage);
	return(
		<div>
			<div className="profile-image-container">
				<img className="profile-image" src={profileImage} alt="Profile Pic" height="150" width ="150"></img>
				<button type="button" onClick={handleShowImageUploadModal}>+</button>
			</div>

			
			<div className="container" style={ showImageUploadModal ? { display: "block" } : { display: "none" }}>
				<div id="oc-alert-container"></div>
				<div className="card border-light mb-3 mt-5" style={{ boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)' }}>
					<div className="card-header">
						<h3 style={{ color: '#555', marginLeft: '12px' }}>Image Upload</h3>
						<p className="text-muted" style={{ marginLeft: '12px' }}>Upload Size: 250px x 250px (Max 2MB)</p>
					</div>
					<div className="card-body">
						<p className="card-text">Please upload an image for your profile</p>
						<input type="file" onChange={fileSelectionHandler}/>
						<div className="mt-5">
							<button className="btn btn-info" onClick={fileUploadHandler}>Upload!</button>
							<button className="btn btn-info" onClick={handleHideImageUploadModal}>X</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default ProfilePicture;