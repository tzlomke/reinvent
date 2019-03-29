import React from 'react';
import './Header.css';

const header = props => (
  <div className="header">
    <div>REINVENT</div>
    <div className={props.navMsgColor}>{props.navMessage}</div>
    <div>
      Company Name <span className="pipe">|</span> Logo
    </div>
  </div>
);
export default header;