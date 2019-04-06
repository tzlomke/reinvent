import React from 'react';
import ast404ronaut from '../../images/astro-selfie-bw.png';
import './style.css';
import Header from '../../components/Header';
import { Container } from "../../components/Grid";
import { Title, /* SubTitle */ } from "../../components/Title";
import { CardOutline } from "../../components/NewsCard";
// import { Link } from "react-router-dom";
import {  StyleLink } from "../../components/StyleButton";
import header from '../../components/Header';

// This function was added due to problems with the idea route not properly loading 404 errors
// Before this function, since ideas is not an exact path, 404 would load the header twice
// Once in the ideas page, and once in the 404 page.

let allowHeaderAndContainer = true;

(() => {
  const currentPath = window.location.pathname;
  const splitPath = currentPath.split('/');
  if(splitPath[1] === 'ideas' && currentPath !== "/404") {
    allowHeaderAndContainer = false;
  }
})();

const page404 = () => {
  return(
    <div>
      {allowHeaderAndContainer === true ? (
        <div>
          <Header />
          <Container>
            <StyleLink
              btnTxt="Take Me Home"
              linkTo="/news-feed"
            />
            {/* <Link
              to="/"
              className="btn-large brand-logo center white-text nav-link"> Take Me Home
            </Link> */}
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
      ) : (
        <div>
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
        </div>
      )}
    </div>
  )
}

export default page404;