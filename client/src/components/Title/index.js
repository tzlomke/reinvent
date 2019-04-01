import React from "react";


export function Title({ titleText, children }) {
  return (
    <div className="pageTitle"> 
        <br />
        <h1>{ titleText }</h1>
        <hr />
        { children }
    </div>
  );
}

export function SubTitle({ subTitleText, children }) {
    return (
      <div className="pageSubTitle"> 
          <br />
          <h3>{ subTitleText }</h3>
          <hr />
          { children }
      </div>
    );
  }