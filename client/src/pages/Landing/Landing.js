import React from "react";
import lightbulbCutout from "../../images/lightbulbCutout.png";
import "./style.css";


const Landing = (props) => {
	
	return (
		
		<div>
			 
			<div className="logoContainer">
				<img className="logoImage" src={lightbulbCutout} alt="Light Bulb"></img>
				<div className="logoTextContainer">
					<h1 className="logoHatch">RE:INVENT</h1>
					<h1 className="logoOutline">RE:INVENT</h1>
				</div>
			</div>
			
			<br />
			
			{/* <div style={{ height: "75vh" }} className="container valign-wrapper">
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
			</div> */}

		</div>
	);

}


export default Landing;