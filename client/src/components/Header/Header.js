import React from 'react';
import './Header.css';

const header = props => (
  <div className="header">
    <div>RE:INVENT</div>
    <div className={props.navMsgColor}>{props.navMessage}</div>
    <div>
      Company Name <span className="pipe">|</span> Logo
    </div>
  </div>
);
export default header;