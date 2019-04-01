import React from 'react';
import donotpass from '../../images/none_shall_pass.png';
import './style.css';
import Header from '../../components/Header';
import { Col, Row, Container } from "../../components/Grid";

const page404 = () => {
  return(
    <div>
      <Header />
      <Container>
        {/* <h1>404 Error</h1> */}
        <div id="container404">
        <a id="return_link" href="/dashboard">Take Me Home</a>
          <img id="dead_link" src={donotpass} alt="Dead Link"></img>
        </div>
      </Container>
    </div>
  )
}

export default page404;