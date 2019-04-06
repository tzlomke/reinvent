import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = props => (

	
	<div className="navbar-right">
		<NavLink
			to="/News-Feed"
			className="col s5 brand-logo center white-text nav-NavLink"
			activeStyle={{color: "#f46717"}}> News
		</NavLink>
		<span className="pipe">|</span>
		<NavLink
			to="/ideas/active"
			className="col s5 brand-logo center white-text nav-NavLink"
			activeStyle={{color: "#f46717"}}> Ideas
		</NavLink>
		<span className="pipe">|</span>
		<NavLink
			to="/calendar"
			className="col s5 brand-logo center white-text nav-NavLink"
			activeStyle={{color: "#f46717"}}> Calendar
		</NavLink>
		<span className="pipe">|</span>
        <NavLink
	    to="/resources"
		className="col s5 brand-logo center white-text nav-NavLink"
		activeStyle={{color: "#f46717"}}> Resources
		</NavLink>
		<span className="pipe">|</span>
		<NavLink
			to={props.profileRoute}
			className="col s5 brand-logo center white-text nav-NavLink"
			activeStyle={{color: "#f46717"}}> Profile
		</NavLink>
		<span className="pipe">|</span>
		<NavLink
			onClick={props.onLogoutClick}
			to="/dashboard"
			className="col s5 brand-logo center white-text nav-NavLink"
			activeStyle={{color: "#f46717"}}> Logout
		</NavLink>
		
	</div>
);


export default Navbar;
