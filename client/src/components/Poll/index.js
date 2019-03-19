import React, { Component } from 'react';
import ReactVote from 'react-vote'
import API from "../utils/voteAPI";

class Poll extends Component {
    onCreate(data, diff) {
        console.log(data)
        API.saveVote()
    }
    onUpvote() {
        console.log("upvote")
    }

    onClose() {
        console.log("close")
    }

    onReset() {
        console.log("reset")
    }

    render() {
        return (
            <ReactVote
            // styles={customStyle}
            text = {
                "Would you like to Vote"
            }
            onCreate = {
                this.onCreate
            }
            onUpvote = {
                this.onUpvote
            }
            onClose = {
                this.onClose
            }
            onReset = {
                this.onReset
            }
            isAdmin = {
                true
            }
            clientId = {
                "01"
            }
            />
        );
    }
}

export default Poll;