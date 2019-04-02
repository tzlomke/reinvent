import React from "react";

// This component allows for making Title Tags. Explictly set appropriate title and sub title prop to text you like. If you want tile to be centered on page use the optional center flag when calling the component.

export function Title({ titleText, center, children }) {
  return (
    <div className={`pageTitle ${center ? "center-align" : ""}`}> 
        <br />
        <h1>{ titleText }</h1>
        <hr />
        { children }
    </div>
  );
}

export function SubTitle({ subTitleText, center, children }) {
    return (
      <div className={`pageSubTitle ${center ? "center-align" : ""}`}> 
          <br />
          <h3>{ subTitleText }</h3>
          <hr />
          { children }
      </div>
    );
  }