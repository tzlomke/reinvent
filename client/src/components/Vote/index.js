import React, {Component} from "react";
import ReactVote from "react-vote";
import voteAPI from "../../utils/voteAPI";

class Vote extends Component {
    state = {
        userId: "1",
        votes: []
    };

    data = "";

    componentDidMount() {
        this.loadVotes();
    }

    updateVote = (data) => {
        voteAPI.updateVote(this.data._id,  data).then(res =>{
            console.log(res.data);
        });
    };

    loadVotes = () => {
        voteAPI.getVotes().then(res =>  {
            this.setState({votes:res.data});
        });
    };

    onCreate = (data) =>  {
        voteAPI.saveVote(data).then(res => {
            this.data = res.data;
            console.log(this.data);
        });
    };

    onUpvote = (data) => {
        this.updateVote(data);
    };

    onDownvote = (data) => {
        this.updateVote(data);
    };  
    
    onClose = (data) => {
        this.updateVote(data);
    };

    onReset = (data) => {
        this.updateVote(data);
    };

    onExpand = (data) => {
        this.updateVote(data);
    };

    onEdit = (data) => {
        this.updateVote(data);
    };
    
    render() {
        return (
        <div>
            <ReactVote
            // styles={customStyle}
            // text={customText}
            onCreate={this.onCreate}
            onUpvote={this.onUpvote}
            onClose={this.onClose}
            onReset={this.onReset}
            onDownvote={this.onDownvote}
            onExpand={this.onExpand}
            onEdit={this.onEdit}
            isAdmin={true}
            clientId={"1"}
            />
            {this.state.votes.map(vote => (
                console.log(vote),
                <ReactVote
                key={vote._id}
                // styles={customStyle}
                // text={customText}
                data={vote}
                onCreate={this.onCreate}
                onUpvote={this.onUpvote}
                onClose={this.onClose}
                onReset={this.onReset}
                onDownvote={this.onDownvote}
                onExpand={this.onExpand}
                onEdit={this.onEdit}
                isAdmin={true}
                clientId={"1"}
                />
            ))}
        </div>
        );
    };
};

export default Vote;