import React from "react";
import { Link } from "react-router-dom";
import './IdeasNavBar.css';


function Navbar(props){
	return (

		<div className="navbar-ideas">
  
		<Link
			to="/ideas/active"
			className="btn-large brand-logo center black-text nav-link"> Active Ideas
		</Link>
		<Link
			to="/ideas/closed"
			className="btn-large brand-logo center black-text nav-link"> Closed Ideas
		</Link>
		<Link
			to="/ideas/trending"
			className="btn-large brand-logo center black-text nav-link">Trending Ideas
		</Link>
		
		{/* <div className="navbar-fixed">
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
                        </li> */}
                        {/* <li> */}
                            <a className="btn-large brand-logo center black-text btn-lrg modal-trigger" href="#campaignFormModal"> New Idea +</a>
                        {/* </li> */}
                    {/* </ul> */}
				</div>
			// </nav>
		// </div>
	);
}

export default Navbar;