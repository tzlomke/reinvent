import React, { Component } from "react";
import SpaceGirl from "../../images/Retro-Astronaut2.png";
import $ from "jquery";
import "./style.css";

import { Parallax } from "react-parallax";

class Landing extends Component {
	
	constructor(props) {
		super(props);
		this.state = { width: 0, height: 0 };
		this.handleScroll = this.handleScroll.bind(this);
	};

	handleScroll () {
        $('html, body').animate({
            scrollTop: $(".about-container").offset().top
        }, 2200);
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
				<div className="about-container" ref={this.myRef}>
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
								
							</div>
						</div>
						
						{/* Text Content */}
						<div className="row">
							<p className="text-content">
								No matter what business you're in, the landscape is changing. The internet has created an ecosystem in which your ability to innovate can make or break your company.
								Your two-year product development timeline? <span>Too slow.</span> Your top-down hierarchy? <span>Too rigid.</span> You know it, your competitors know it, 
								and, perhaps most importantly, your employees know it. How are you going to keep up?

								That's what we're here for. Re:invent is an innovation-management platform designed to source ideas from every level of your company. The best ideas will rise to the top.
							</p>
						</div>

					</div>
				</div>

			</div>

			
			
		);
	}
}


export default Landing;
