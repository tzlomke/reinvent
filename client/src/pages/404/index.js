import React from 'react';
import donotpass from '../../images/none_shall_pass.jpg';
import './style.css';
import Header from '../../components/Header';
import { Col, Row, Container } from "../../components/Grid";
import { Title, SubTitle } from "../../components/Title";


const page404 = () => {
  return(
    <div>
      <Header />
      <Container>
        <Title
          titleText="Page not Found"
        />
        <div id="container404">
        <a id="return_link" href="/dashboard">Take Me Home</a>
          <img id="dead_link" src={donotpass} alt="Dead Link"></img>
        </div>
      </Container>
    </div>
  )
}

export default page404;