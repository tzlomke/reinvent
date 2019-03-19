import axios from "axios";

export default {
    // Gets all votes
    getVotes: function () {
        return axios.get("/api/vote");
    },
    // Gets the vote with the given id
    getvote: function (id) {
        return axios.get("/api/vote/" + id);
    },
    // Deletes the book with the given id
    deleteVote: function (id) {
        return axios.delete("/api/vote/" + id);
    },
    // Saves a book to the database
    saveVote: function (voteData) {
        return axios.post("/api/vote", voteData);
    }
};