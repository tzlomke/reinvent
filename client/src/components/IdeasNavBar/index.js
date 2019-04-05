import React from "react";
import { Link } from "react-router-dom";
import './IdeasNavBar.css';
import { StyleButton, StyleLink } from "../../components/StyleButton";


function Navbar(props){
	return (

		<div className="navbar-ideas">
		<StyleLink
          btnTxt="Active Ideas"
          linkTo="/ideas/active"
        />
		<StyleLink
          btnTxt="Closed Ideas"
          linkTo="/ideas/closed"
        />
		<StyleLink
          btnTxt="Trending Ideas"
          linkTo="/ideas/trending"
        />
		<StyleButton
			btnTxt="New Idea +"
			dataTarget="campaignFormModal"
			modal= {true}
        />
		{/* <Link
			to="/ideas/active"
			className="btn-small brand-logo center white-text nav-link"> Active Ideas
		</Link>
		<Link
			to="/ideas/closed"
			className="btn-small brand-logo center white-text nav-link"> Closed Ideas
		</Link>
		<Link
			to="/ideas/trending"
			className="btn-small brand-logo center white-text nav-link">Trending Ideas
		</Link> */}
		
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
                            {/* <a className="btn-small brand-logo center white-text btn-lrg modal-trigger" href="#campaignFormModal"> New Idea +</a> */}
                        {/* </li> */}
                    {/* </ul> */}
				</div>
			// </nav>
		// </div>
	);
}

export default Navbar;