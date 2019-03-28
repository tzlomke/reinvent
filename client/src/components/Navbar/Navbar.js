import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = props => (
  <div className="navbar ">
    <Link
	    to="/"
		className="col s5 brand-logo center white-text nav-link"> Ideas
		</Link>
        <Link
	    to="/"
		className="col s5 brand-logo center white-text nav-link"> Newsletter
		</Link>
        <Link
	    to="/"
		className="col s5 brand-logo center white-text nav-link"> Calendar
		</Link>
        <Link
	    to="/"
		className="col s5 brand-logo center white-text nav-link"> Resources
		</Link>
        <Link
	    to="/"
		className="col s5 brand-logo center white-text nav-link"> Profile
		</Link>
    
    
  </div>
);

export default Navbar;