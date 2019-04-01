import React from "react";
import lightbulbCutout from "../../images/lightbulbCutout.png";
import "./style.css";


const Landing = (props) => {
	
	return (
		
		<div>
			 
			<div className="container logoContainer">
				<div class="row">
					<div class="col s12">
						<img className="logoImage" src={lightbulbCutout} alt="Light Bulb"></img>
						<div className="logoTextContainer center-align">
							<h1 className="logoHatch center-align">Re:invent</h1>
							<h1 className="logoOutline center-align">Re:invent</h1>
						</div>
					</div>
				</div>
			</div>
			
			<br />
			
			<div style={{ height: "75vh" }} className="container valign-wrapper">
				<div className="row">
					<div className="col s12 center-align">
						<br />

						<a href="/register"
							style={{
								width: "150px",
								borderRadius: "3px",
								letterSpacing: "1.5px"
							}}
							className="btn btn-large waves-effect waves-light hoverable blue accent-3"
						>
							Register
						</a>

						<a href="/login"
							style={{
								marginLeft: "2rem",
								width: "150px",
								borderRadius: "3px",
								letterSpacing: "1.5px"
							}}
							className="btn btn-large waves-effect white hoverable black-text"
						>
							Log In
						</a>

					</div>
				</div>
			</div>

		</div>
	);

}


export default Landing;