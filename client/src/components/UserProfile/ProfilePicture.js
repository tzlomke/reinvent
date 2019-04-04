import React from "react";

const ProfilePicture = (props) => {
	const { profileImage, handleShowImageUploadModal, handleHideImageUploadModal, fileSelectionHandler, fileUploadHandler, showImageUploadModal, userId, authenticatedUserID } = props;
	
	if (userId === authenticatedUserID) {
		return (
			<div>
				<figure className="profile-image-container">
					<img src={profileImage} alt="Profile Pic" />
					<figcaption><i className="ion-android-add"></i></figcaption>
					<a href="#" onClick={handleShowImageUploadModal}></a>
				</figure>
				
				<div className="modal-container" style={ showImageUploadModal ? {display: "inline-block"} : {display: "none"} }>
					<div id="oc-alert-container"></div>
					<div className="card border-light mb-3 mt-5" style={{ boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)' }}>
						<div className="card-header">
							<h3 style={{ marginLeft: "12px", display: "inline-block" }}>Profile Image Upload</h3>
							<button className="btn image-upload-modal-button" onClick={handleHideImageUploadModal} style={{float: "right", marginTop: "12px", marginRight: "12px"}}>X</button>
							<p className="text-muted" style={{ marginLeft: '12px' }}>Max File Size: 2mb</p>
						</div>
						<div className="card-body">
							<div class="file-upload">
								<label for="upload" class="btn image-upload-modal-button image-select-button">Select a file</label>
								<input onChange={fileSelectionHandler} id="upload" class="file-upload__input" type="file" name="file-upload" />
							</div>
							<div className="mt-5">
								<button className="btn image-upload-modal-button" onClick={fileUploadHandler} style={{margin: "12px"}}>Submit</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	} else {
		return (
			<div>
				<figure className="not-my-profile-image-container">
					<img src={profileImage} alt="Profile Pic" style={{height: "190px", width: "190px"}}/>
				</figure>
			</div>
		)
	}
};

export default ProfilePicture;