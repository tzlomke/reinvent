import React from "react";
import ReactVote from "react-vote";

function Vote(props){
    return (
        props.data.length === 0 ? (
            <div>
                <ReactVote
                styles={{opacity:1}}
                // text={customText}
                onCreate={props.onCreate}
                onUpvote={props.onUpvote}
                onClose={props.onClose}
                onReset={props.onReset}
                onDownvote={props.onDownvote}
                onExpand={props.onExpand}
                onEdit={props.onEdit}
                isAdmin={true}
                clientId={"1"}
                />
            </div>
        ) : (
            console.log("this is happening"),
            console.log(props.data[0]),
            <div>
                <ReactVote
                data={props.data[0]}
                styles={{opacity:1}}
                // text={customText}
                onCreate={props.onCreate}
                onUpvote={props.onUpvote}
                onClose={props.onClose}
                onReset={props.onReset}
                onDownvote={props.onDownvote}
                onExpand={props.onExpand}
                onEdit={props.onEdit}
                isAdmin={true}
                clientId={"1"}
                />
            </div>
        )
        );
};

export default Vote;