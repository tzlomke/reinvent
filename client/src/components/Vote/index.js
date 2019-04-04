import React from "react";
import ReactVote from "react-vote";
import "./style.css"

function Vote(props){
    return (
        props.data.length === 0 ? (
            <div>
                <h5 className="center-align">Vote</h5>
                <div className="divider col s12"></div>
                <ReactVote
                styles={{
                    voteTitle: "voteTitle",
                    voteWrapper: "voteWrapper",
                    settingButton: "settingButton image-upload-modal-button",
                    removeButton:"image-upload-modal-button",
                    resultButton:"image-upload-modal-button",
                    goBackButton:"image-upload-modal-button",
                    closeButton: "image-upload-modal-button",
                    resetButton: "image-upload-modal-button",
                    voteButton: "image-upload-modal-button",
                    downvoteButton: "image-upload-modal-button",
                    buttonWrapper: "buttonWrapper",
                    votedText: "votedText",
                    itemTitle: "itemTitle",
                    createButton: "image-upload-modal-button",
                    addButton: "image-upload-modal-button",
                    addWrapper: "addWrapper"
                }}  
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
                <div className="divider col s12"></div>
                <ReactVote
                data={props.data[0]}
                styles={{
                    voteTitle: "voteTitle",
                    voteWrapper: "voteWrapper",
                    settingButton: "settingButton image-upload-modal-button",
                    removeButton:"image-upload-modal-button",
                    resultButton:"image-upload-modal-button",
                    goBackButton:"image-upload-modal-button",
                    closeButton: "image-upload-modal-button",
                    resetButton: "image-upload-modal-button",
                    voteButton: "image-upload-modal-button",
                    downvoteButton: "image-upload-modal-button",
                    buttonWrapper: "buttonWrapper",
                    votedText: "votedText",
                    itemTitle: "itemTitle",
                    createButton:"image-upload-modal-button",
                    addButton: "image-upload-modal-button",
                    addWrapper: "addWrapper"
                }}
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