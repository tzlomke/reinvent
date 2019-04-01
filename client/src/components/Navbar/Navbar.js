import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = props => (

	
  <div className="navbar ">
  
		<Link
			to="/News-Feed"
			className="col s5 brand-logo center white-text nav-link"> News Feed
		</Link>
		<Link
			to="/ideas"
			className="col s5 brand-logo center white-text nav-link"> Ideas
		</Link>
		<Link
			to="/calendar"
			className="col s5 brand-logo center white-text nav-link"> Calendar
		</Link>
		<Link
			to="/"
			className="col s5 brand-logo center white-text nav-link"> Resources
		</Link>
		<Link
			to={props.profileRoute}
			className="col s5 brand-logo center white-text nav-link"> Profile
		</Link>
		<Link
			to="/dashboard"
			className="col s5 brand-logo center white-text nav-link"> Logout
		</Link>
		
	</div>
);


export default Navbar;
