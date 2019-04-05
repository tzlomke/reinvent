import React, { Component } from "react";
import SpaceGirl from "../../images/Retro-Astronaut2.png";
import $ from "jquery";
import "./style.css";
import Daniel from "../../images/Daniel.jpeg";
import Brant from "../../images/Brant.jpeg";
import Taylor from "../../images/Taylor.png";
import Andy from "../../images/Andy.jpeg";
import Akop from "../../images/Akop.jpeg";

import { Parallax } from "react-parallax";

class Landing extends Component {
	
	constructor(props) {
		super(props);
		this.state = { width: 0, height: 0 };
		this.handleScroll = this.handleScroll.bind(this);
	};

	handleScroll () {
        $('html, body').animate({
            scrollTop: $(".about-container").offset().top,
		}, 2000);
		
		$("#text span").css({
			color: "rgb(47, 47, 47)",
			transform: "translate(-50%,-50%) skewY(0deg) skewX(0deg)",
			left: "0",
			top: "0",
			transitionDelay: "1.9s"
		});
	};

	render () {
		return (
			
			<div className="landing-page-container">
				<Parallax
					bgImage={SpaceGirl}
					bgImageAlt="Girl in Space Helmet"
					strength={310}
				>
					{/* Splash Page */}
					<div className="background-container">
						{/* Animated Background */}
						<div>
							<div className="container valign-wrapper splash-container">
								<div className="row">
									<div className="col s12 center-align">
										<p className="logo-text">R<em>e</em>:invent</p>
									</div>
									
									<div className="col s12 center-align links-container">
										<a className="auth-links button" href="/register"
											style={{
												width: "150px",
												borderRadius: "3px",
												letterSpacing: "1.5px"
											}}
										>
											Register
										</a>
											
										<a className="auth-links button" href="/login"
											style={{
												marginLeft: "5rem",
												width: "150px",
												borderRadius: "3px",
												letterSpacing: "1.5px"
											}}
										>
											Log In
										</a>
									</div>
									
									<div className="row">
										<div className="col s12 center-align">
											<a href="#" className="scroll-click" onClick={() => {this.handleScroll()}}>
												&#709;
											</a>
										</div>
									</div>
								</div>
								
							</div>

						</div>
						<div className="ripple-background">
							<div className="circle xxlarge shade1"></div>
							<div className="circle xlarge shade2"></div>
							<div className="circle large shade3"></div>
							<div className="circle medium shade4"></div>
							<div className="circle small shade5"></div>
						</div>

						
					</div>
				</Parallax>


				{/* About Page */}
				<div className="about-container">
					<div className="container">
						
						{/* Display Font */}
						<div className="row">
							<div className="col s12 ">
								
								<div className="display-text">
									<div>
										<div id="text">
											<span>What's the big idea?</span>
											<span>What's the big idea?</span>
											<span>What's the big idea?</span>
										</div>
									</div>
								</div>

								<p className="text-content" style={{lineHeight: "24px"}}>
								Your two-year product development timeline? <span style={{fontWeight: "bold", fontSize: "24px"}}>Too slow.</span> Your top-down hierarchy? <span style={{fontWeight: "bold", fontSize: "24px"}}>Too rigid.</span> We're here to <span style={{fontWeight: "bold", fontSize: "24px"}}>change that.</span> 

								
								</p>
								
							</div>
						</div>
						
						{/* Text Content */}
						<div className="row">
						    <div className="col s12">
								<p className="text-content" style={{lineHeight: "24px"}}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
								ncididunt ut labore et dolore magna aliqua. Ut etiam sit amet nisl purus in mollis nunc. Adipiscing 
								commodo elit at imperdiet dui accumsan sit amet. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet.
								 Egestas sed sed risus pretium. Nec ullamcorper sit amet risus nullam. Non enim praesent elementum facilisis leo vel 
								 fringilla est ullamcorper. Sed faucibus turpis in eu. Libero nunc consequat interdum varius sit amet mattis vulputate. Hac 
								<br /><br />
								 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
								ncididunt ut labore et dolore magna aliqua. Ut etiam sit amet nisl purus in mollis nunc. Adipiscing 
								commodo elit at imperdiet dui accumsan sit amet. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet.
								 Egestas sed sed risus pretium. Nec ullamcorper sit amet risus nullam. Non enim praesent elementum facilisis leo vel 
								 fringilla est ullamcorper. Sed faucibus turpis in eu. Libero nunc consequat interdum varius sit amet mattis vulputate. Hac 
								</p>
							</div>
						</div>
					</div>
					
					<div className="developer-profiles-container">
						<div className="row dev-profiles-row">
							<div className="col s12">

								<div className="custom-columns">
									<figure className="developer-profile">
										<img src={Brant} alt="Brant Keener" style={{height: "140px", width: "140px"}}/>
										<figcaption><i className="ion-social-linkedin"></i></figcaption>
										<a href="https://www.linkedin.com/in/brant-keener-68249bb5/" target="_blank" rel="noopener noreferrer" style={{opacity: "0"}}>Brant</a>
									</figure>
									<p className="developer-name">Brant Keener</p>
								</div>

								<div className="custom-columns">
									<figure className="developer-profile">
										<img src={Akop} alt="Akop (Jack) Karapetyan" style={{height: "140px", width: "140px"}}/>
										<figcaption><i className="ion-social-linkedin"></i></figcaption>
										<a href="https://www.linkedin.com/in/akopkarapetyan/" target="_blank" rel="noopener noreferrer" style={{opacity: "0"}}>Akop</a>
									</figure>
									<p className="developer-name">Akop Karapetyan</p>
								</div>

								<div className="custom-columns">
									<figure className="developer-profile">
										<img src={Taylor} alt="Taylor Zlomke" style={{height: "140px", width: "140px"}}/>
										<figcaption><i className="ion-social-linkedin"></i></figcaption>
										<a href="https://www.linkedin.com/in/taylorzlomke/" target="_blank" rel="noopener noreferrer" style={{opacity: "0"}}>Taylor</a>
									</figure>
									<p className="developer-name">Taylor Zlomke</p>
								</div>

								<div className="custom-columns">
									<figure className="developer-profile">
										<img src={Andy} alt="Andrew Marshall" style={{height: "140px", width: "140px"}}/>
										<figcaption><i className="ion-social-linkedin"></i></figcaption>
										<a href="https://www.linkedin.com/in/andrewmarshall85/" target="_blank" rel="noopener noreferrer" style={{opacity: "0"}}>Andy</a>
									</figure>
									<p className="developer-name">Andrew Marshall</p>
								</div>
								
								<div className="custom-columns">
									<figure className="developer-profile">
										<img src={Daniel} alt="Daniel Lois" style={{height: "140px", width: "140px"}}/>
										<figcaption><i className="ion-social-linkedin"></i></figcaption>
										<a href="https://www.linkedin.com/in/daniel-lois-53759569/" target="_blank" rel="noopener noreferrer" style={{opacity: "0"}}>Daniel</a>
									</figure>
									<p className="developer-name">Daniel Lois</p>
								</div>
								
							</div>
						</div>
					</div>
				</div>

			</div>

			
			
		);
	}
}


export default Landing;
