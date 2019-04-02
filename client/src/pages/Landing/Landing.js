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
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}
	  
	componentDidMount() {
		this.updateWindowDimensions();
		this.handleScroll();
		window.addEventListener('resize', this.updateWindowDimensions);
	}
	  
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}
	  
	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	handleScroll () {
        $('html, body').animate({
            scrollTop: $(".about-container").offset().top
        }, 1000);
    }

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
										<p className="logo-text">Re:invent</p>
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
												&#8609;
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
							<div className="col s12 display-text">
								
									<div>
										<div className="center">
											<h1>
												What's the big idea?!
											</h1>
										</div>
									</div>
								
							</div>
						</div>
						
						{/* Text Content */}
						<div className="row">
							<p className="text-content">
								Hello
							</p>
						</div>

					</div>
				</div>

			</div>

			
			
		);
	}
}


export default Landing;