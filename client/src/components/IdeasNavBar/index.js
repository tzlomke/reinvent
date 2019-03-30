import React from "react";
import { Link } from "react-router-dom";

function Navbar(props){
	return (
		<div className="navbar-fixed">
			<nav className="z-depth-0">
				<div className="nav-wrapper white">
					<ul className ="tabs">
                        <li>
                            <Link
						        to="/ideas/active"
						        className="black-text nav-link">
						        Active Ideas
					        </Link>
                        </li>
                        <li>
                            <Link
							    to="/ideas/closed"
							    className="black-text nav-link">
						        Closed Ideas
					        </Link>
                        </li>
                        <li>
                            <a className="black-text btn-lrg modal-trigger" href="#campaignFormModal">New Idea</a>
                        </li>
                    </ul>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;