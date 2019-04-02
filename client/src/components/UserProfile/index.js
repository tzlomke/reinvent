import React, { Component } from "react";
import API from "../../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import axios from 'axios';
import $ from 'jquery';
import ProfileData from "./ProfileData";
import ProfilePicture from "./ProfilePicture";
import defaultProfileImage from "../../images/lightbulbCutout.png"
import { Col, Row, Container } from "../../components/Grid";
// import { Title, SubTitle } from "../../components/Title";
import { CardOutline } from "../../components/NewsCard";
import "./style.css";

class UserProfile extends Component {

	state = {
		userID: "",
		userFullName: "",
		username: "",
		userCampaigns: [],
		profileImage: "",
		selectedFile: null,
		showImageUploadModal: false
	};

	handleShowImageUploadModal = () => {
		this.setState({ showImageUploadModal: true });
	};

	handleHideImageUploadModal = () => {
		this.setState({ showImageUploadModal: false });
	};

	fileSelectionHandler = (event) => {
		this.setState({
			selectedFile: event.target.files[0]
		});
	};
	
	fileUploadHandler = () => {
		const data = new FormData();
		// If file selected
		if ( this.state.selectedFile ) {
			data.append('profileImage', this.state.selectedFile, this.state.selectedFile.name);
			axios.post(`/api/profile/${this.state.username}/profile-image-upload`, data, {
				headers: {
					'accept': 'application/json',
					'Accept-Language': 'en-US,en;q=0.8',
					'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
				}
			})
			.then((response) => {
				if ( 200 === response.status ) {
					// If file size is larger than expected.
					if( response.data.error ) {
						if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
							this.ocShowAlert( 'Max size: 2MB', 'red' );
						} else {
							console.log( response.data );
							// If not the given file type
							this.ocShowAlert( response.data.error, 'red' );
						}
					} else {
						// Success
						let fileName = response.data;
						console.log( 'fileName', fileName );
						this.ocShowAlert( 'File Uploaded', '#3089cf' );
						setTimeout(() => {
							this.handleHideImageUploadModal();
						}, 500)
						this.loadUser();
					}
				}
				}).catch( ( error ) => {
					// If another error
					this.ocShowAlert( error, 'red' );
				});
		} else {
			// if file not selected throw error
			this.ocShowAlert( 'Please upload file', 'red' );
		}
	};

	// ShowAlert Function
	ocShowAlert = (message, background = '#3089cf') => {
		let alertContainer = document.querySelector('#oc-alert-container'),
		alertEl = document.createElement('div'),
		textNode = document.createTextNode(message);
		alertEl.setAttribute('class', 'oc-alert-pop-up');
		$(alertEl).css('background', background);
		alertEl.appendChild(textNode);
		alertContainer.appendChild(alertEl);
		setTimeout(function () {
			$(alertEl).fadeOut('slow');
			$(alertEl).remove();
		}, 3000);
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
		API.getUserByUsername(username)
			.then(response => {
				// This will prevent redirecting to a dead userprofile if the name is clicked on the ideas page. 
				if(response.data.length === 0) {
					return window.location = `/404`;
				};
				let userData = response.data[0]
				this.setState({
					userID: userData._id,
					userFullName: `${userData.firstName} ${userData.lastName}`,
					username: userData.username,
					userCampaigns: userData.campaigns,
				})
				if (userData.profileImage[0] !== undefined) {
					this.setState({
						profileImage: userData.profileImage[userData.profileImage.length-1]
					});
				} else {
					this.setState({
						profileImage: defaultProfileImage
					});
				};
			});
	};

	componentDidMount = () => {
		this.loadUser();
	};

	render() {
		const { user } = this.props.auth

		return(
			<Container>
				{/* <Title 
          			titleText="My Profile"
				/> */}
				<CardOutline
					colSize={ "12" } 
					cardColor={ "" }
					cardTextColor={ "" }
				>
					<div className="profile-wrapper">
						<ProfilePicture 
							handleShowImageUploadModal = {this.handleShowImageUploadModal}
							handleHideImageUploadModal = {this.handleHideImageUploadModal}
							showImageUploadModal = {this.state.showImageUploadModal}
							fileSelectionHandler = {this.fileSelectionHandler}
							fileUploadHandler = {this.fileUploadHandler}
							profileImage = {this.state.profileImage}
							userId = {this.state.userID}
							authenticatedUserID = {user.id}
						/>

						<ProfileData 
							authenticatedUserID = {user.id}
							userID = {this.state.userID}
							userFullName = {this.state.userFullName}
							username = {this.state.username}
							userCampaigns = {this.state.userCampaigns}
							logout = {this.onLogoutClick}
						/>
					</div>
				</CardOutline>
			</Container>
		)
	};
}

UserProfile.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  	auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(UserProfile);