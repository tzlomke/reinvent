import React from "react";
import ReactVote from "react-vote";
import "./style.css"

function Vote(props){
    return (
        props.data.length === 0 ? (
            <div>
                <h5 className="center-align">Vote</h5>
                <ReactVote
                styles={ {voteTitle: "voteTitle" } }  
                // text={customText}
                onCreate={props.onCreate}
                onUpvote={props.onUpvote}
                onClose={props.onClose}
                onReset={props.onReset}
                onDownvote={props.onDownvote}
                onExpand={props.onExpand}
                onEdit={props.onEdit}
                isAdmin={true}
                clientId={props.clientId}
                />
            </div>
        ) : (
            <div>
                <h5 className="center-align">Vote</h5>
                <ReactVote
                data={props.data[0]}
                styles={{voteTitle: {fontSize: "20px" }}}
                // text={customText}
                onCreate={props.onCreate}
                onUpvote={props.onUpvote}
                onClose={props.onClose}
                onReset={props.onReset}
                onDownvote={props.onDownvote}
                onExpand={props.onExpand}
                onEdit={props.onEdit}
                isAdmin={true}
                clientId={props.clientId}
                />
            </div>
        )
        );
};

export default Vote;