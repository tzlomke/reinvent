import React from "react";
import lightbulbCutout from "../../images/lightbulbCutout.png";
import "./style.css";
import { Col, Row, Container } from "../../components/Grid";
import { Title, SubTitle } from "../../components/Title";

const Landing = (props) => {
	
	return (
		<Container>
				<br />
				{/* The two following div tags were changed from class to className */}
				<Row>
					<Col size="12">

						<img className="logoImage" src={lightbulbCutout} alt="Light Bulb"></img>
						{/* <h1 className="logoHatch center-align">Re:invent</h1>
						<hr /> */}
						<Title center
							titleText="Re:invent"
						/>
						<div className="logoTextContainer center-align">
							{/* <h1 className="logoOutline center-align">Re:invent</h1> */}
						</div>
					</Col>
				</Row>
				<br />
				<div style={{ height: "5vh" }} className=" valign-wrapper">
					<Row>
						<Col size="12">
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
						</Col>
					</Row>
				</div>
			</Container>
	);
}


export default Landing;