import React from 'react';
import Vote from "../Vote";
import "./styles.css";

const CampaignDisplay = (props) => {
  const { title, author, synopsis, styles, onCreate, onUpvote,
    onClose, onReset, onDownvote, onExpand, onEdit, isAdmin,
    clientId, data, handleData, campaignExpand } = props;
  return(
    <div onClick={handleData}>
      <div className="row"> 
        <a href="javascript:void(0)" onClick={campaignExpand} className="campaignAnchor">
          <section id="campaignDisplay" className="col s9">
            <h2>Title: {title}</h2>
            <h3>Author: {author}</h3>
            <p>{synopsis}</p>
          </section>
        </a>
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