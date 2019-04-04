import React from 'react';
import ast404ronaut from '../../images/astro-selfie-bw.png';
import './style.css';
import Header from '../../components/Header';
import { Container } from "../../components/Grid";
import { Title, /* SubTitle */ } from "../../components/Title";
import { CardOutline } from "../../components/NewsCard";
import { Link } from "react-router-dom";

// This function was added due to problems with the idea route not properly loading 404 errors
// Before this function, since ideas is not an exact path, 404 would load the header twice
// Once in the ideas page, and once in the 404 page.
(() => {
  const currentPath = window.location.pathname;
  if(currentPath !== "/ideas") {
  // The if() below is highly problematic, and reroutes like crazy
  // Since the ideas path is really the only path that has issues with 404, the code has been rewritten as above
  // if(currentPath === "/" || currentPath === "/login" || currentPath === "/register") {
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
            <img id="dead_link" src={ast404ronaut} alt="Dead Link"></img>
          </div>
        </CardOutline>
      </Container>
    </div>
  )
}

export default page404;