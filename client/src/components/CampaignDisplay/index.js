import React from 'react';
import Vote from "../Vote";
import "./styles.css";

const CampaignDisplay = (props) => {
  const { title, author, synopsis, id, styles, onCreate, onUpvote,
    onClose, onReset, onDownvote, onExpand, onEdit, isAdmin,
    clientId, data, handleData, campaignClickable } = props;

  const profileRoute = `/profile/${author}`;
  const ideaRoute = `/ideas/${id}`

  return(
    <div className="onClickDiv" onClick={handleData}>
      <div className="row">
      {/* Added title attribute to both a tags. It's a simple tooltip setup */}
          <section id="campaignDisplay" className="col s9">
            {campaignClickable ? (
              <a title="Click to Expand Campaign" href={ideaRoute} className="campaignAnchor">
                <h2>{title}</h2>
              </a>
            ) : (
              <h2>{title}</h2>
            )}
            <a title="Click to Visit Profile" href={profileRoute}>
              <h5> {author}</h5>
            </a>
            <p>{synopsis}</p>
          </section>

        
          <div className="col s3" id="voteDisplay">
              <Vote
                data={data}
                styles={styles}
                onCreate={onCreate}
                onUpvote={onUpvote}
                onClose={onClose}
                onReset={onReset}
                onDownvote={onDownvote}
                onExpand={onExpand}
                onEdit={onEdit}
                isAdmin={isAdmin}
                clientId={clientId}/>
            </div>
      </div>
      <div className="row">
        <div className="divider col s12"></div>
      </div>
    </div>
  );
};

export default CampaignDisplay;