import React from 'react';
import donotpass from '../../images/none_shall_pass.jpg';
import './style.css';
import Header from '../../components/Header';

const page404 = () => {
  return(
    <div>
      <Header />
      <div id="container404">
      <a id="return_link" href="/dashboard">Take Me Home</a>
        <img id="dead_link" src={donotpass} alt="Dead Link"></img>
      </div>
    </div>
  )
}

export default page404;