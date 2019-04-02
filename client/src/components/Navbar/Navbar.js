import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = props => (

	
	<div className="navbar-right ">
		<Link
			to="/News-Feed"
			className="col s5 brand-logo center white-text nav-link"> News Feed
		</Link>
		<span className="pipe">|</span>
		<Link
			to="/ideas/active"
			className="col s5 brand-logo center white-text nav-link"> Ideas
		</Link>
		<span className="pipe">|</span>
		<Link
			to="/calendar"
			className="col s5 brand-logo center white-text nav-link"> Calendar
		</Link>
		<span className="pipe">|</span>
        <Link
	    to="/resources"
		className="col s5 brand-logo center white-text nav-link"> Resources
		</Link>
		<span className="pipe">|</span>
		<Link
			to={props.profileRoute}
			className="col s5 brand-logo center white-text nav-link"> Profile
		</Link>
		<span className="pipe">|</span>
		<Link
			onClick={props.onLogoutClick}
			to="/dashboard"
			className="col s5 brand-logo center white-text nav-link"> Logout
		</Link>
		
	</div>
);


export default Navbar;
