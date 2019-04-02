import React from 'react';
import donotpass from '../../images/none_shall_pass.jpg';
import './style.css';
import Header from '../../components/Header';
import { Col, Row, Container } from "../../components/Grid";
import { Title, SubTitle } from "../../components/Title";
import { CardOutline } from "../../components/NewsCard";
import { Link } from "react-router-dom";

const page404 = () => {
  return(
    <div>
      <Header />
      <Container>
        <Link
			    to="/dashboard"
			    className="btn-large brand-logo center white-text nav-link"> Take Me Home
		    </Link>
        <Title
          titleText="Page not Found"
        />
        <CardOutline
					colSize={ "12" } 
					cardColor={ "" }
					cardTextColor={ "" }
				>
          <div id="container404">
            <img id="dead_link" src={donotpass} alt="Dead Link"></img>
          </div>
        </CardOutline>
      </Container>
    </div>
  )
}

export default page404;