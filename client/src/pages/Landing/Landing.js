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
			color: $(".logo-text").css("color", "#f46717"),
		}, 2000);
		
		$("#text span").css({
			color: "rgb(47, 47, 47)",
			transform: "translate(-50%,-50%) skewY(0deg) skewX(0deg)",
			left: "0",
			top: "0",
			transitionDelay: "1.9s"
		});

		setTimeout(() => {
			$("#text-animated").addClass("glitch-effect");
		}, 2300);
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
										<a className="auth-links button register" href="/register"
											style={{
												width: "150px",
												borderRadius: "3px",
												letterSpacing: "1.5px"
											}}
										>
											Register
										</a>
											
										<a className="auth-links button login" href="/login"
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
											<span id="text-animated">What's the big idea?</span>
										</div>
									</div>
								</div>

								<p className="text-content" style={{lineHeight: "24px", marginTop: "20px"}}>
									Your two-year product development timeline? <span style={{fontWeight: "bold", fontSize: "24px", color: "#f46717"}}>Too slow.</span> 
									&nbsp;Your company hierarchy? <span style={{fontWeight: "bold", fontSize: "24px", color: "#f46717"}}>Too rigid.</span> 
									&nbsp;We're here to <span style={{fontWeight: "bold", fontSize: "24px", color: "#f46717"}}>change that.</span> 
								</p>
								
							</div>
						</div>
						
						{/* Text Content */}
						<div className="row">
						    <div className="col s12">
								<p className="text-content" style={{lineHeight: "24px"}}>
									In the modern world, businesses have to move at light speed to keep up. You know it. Your competitors know it. So do your employees.
									As workplace hierarchies are flattened, effective decision makers understand the value of bottom-up innovation. If you're going to stay
									ahead, you'll need to source ideas from every level of your organization. Re:invent is a platform designed to help you do just that.
									<br /><br />
									Re:invent enables the capture and management of ideas from seed to harvest. Collective knowledge is aggregated through discussion and 
									voting modules, ensuring that only the best ideas rise to the top. Not only will you hear from those best-positioned to spot emerging trends,
									you'll get the added benefit of an <a href="https://www.forbes.com/sites/kevinkruse/2015/06/22/employee-engagement-strategy/#4d57fc871f60" style={{color: "#f46717", textDecoration: "underline"}}>engaged</a>
									&nbsp;workforce, increasing day-to-day <a href="https://hbr.org/2013/07/employee-engagement-does-more" style={{color: "#f46717", textDecoration: "underline"}}>efficiency</a>.
									<br /><br />
									Demo the application by registering above. If you walk away impressed, contact a member of our team through LinkedIn by clicking one
									of the images below so that we can discuss tailoring the application to suit your business' needs.
									<br /><br />
									What's the big idea? <span style={{fontWeight: "bold", fontSize: "24px", color: "#f46717"}}>Re:invent</span> is here to help you find the answer.
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
