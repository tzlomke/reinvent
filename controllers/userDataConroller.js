const db = require("../models");

module.exports = {
	getUser: function(req, res) {
		db.User
			.find({ username: req.params.username })
			.populate("campaigns")
			.then(dbUser => res.json(dbUser))
			.catch(err => res.status(422).json(err));
	},

	// editProfile: function(req, res) {
	// 	db.User
	// 		.find(req.params.username)

	// }
}