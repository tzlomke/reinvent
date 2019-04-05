import React from 'react';
import "./styles.css";

const CampaignDisplay = (props) => {

  const { title, author, synopsis, id, handleData, campaignClickable, children} = props;

  const profileRoute = `/profile/${author}`;
  const ideaRoute = `/ideas/${id}`

  return(
    <div className="onClickDiv" onClick={handleData}>
      <div className="row">
      {/* Added title attribute to both a tags. It's a simple tooltip setup */}
          <section id="campaignDisplay" className="col s9">
            {campaignClickable ? (
              <a title="Click to Expand Idea" href={ideaRoute} className="campaignAnchor">
                <h2 className="ideaTitleClick">{title}</h2>
                <div className="ideaUnderline"></div>
              </a>
            ) : (
              <h2 className="ideaTitle">{title}</h2>
            )}
            <a title="Click to Visit Profile" href={profileRoute}>
              <h5 className="ideaAuthor"> {author}</h5>
              <div className="authorUnderline"></div>
            </a>
            <br></br>
            <section className="ideaSynopsisContainer">
              <p className="synopsisInstructions">Synopsis: Hover to Expand</p>
              <p className="ideaSynopsis">{synopsis}</p>
            </section>
          </section>

        
          <div className="col s3" id="voteDisplay">
            {children}
            </div>
      </div>
      <div className="row">
        <div className="divider col s12"></div>
      </div>
    </div>
  );
};

export default CampaignDisplay;