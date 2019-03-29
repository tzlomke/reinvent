import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
	render() {
		return (
			<div className="navbar-fixed">
				<nav className="z-depth-0">
					<div className="nav-wrapper white">
						<ul id="nav-mobile" className="center hide-on-med-and-down">
							<li>
								<Link
									to="/ideas"
									className="black-text nav-link">
									Ideas
								</Link>
							</li>
							<li>								
								<Link
									to="/news-feed"
									className="black-text nav-link">
									News Feed
								</Link>
							</li>

						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;

