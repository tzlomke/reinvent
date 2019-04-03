import React from 'react';
import donotpass from '../../images/none_shall_pass.png';
import './style.css';
import Header from '../../components/Header';
import { Col, Row, Container } from "../../components/Grid";
import { Title, SubTitle } from "../../components/Title";
import { CardOutline } from "../../components/NewsCard";
import { Link } from "react-router-dom";

// This function was added due to problems with the idea route not properly loading 404 errors
// Before this function, since ideas is not an exact path, 404 would load the header twice
// Once in the ideas page, and once in the 404 page.
(() => {
  const currentPath = window.location.pathname;
  console.log(currentPath)
  if(currentPath === "/" || currentPath === "/login" || currentPath === "/register") {
    return "User is on the right path";
  } else if (currentPath !== "/404") {
    const regExReadyPath = currentPath.replace(/\//g, "\\/");
    const regExPath = new RegExp(regExReadyPath);
    const newURL = currentPath.replace(regExPath, "/404")
    window.location.pathname = newURL;
  };
})();

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