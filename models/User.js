const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({

	// Define User Schema
	firstName: {
		type: String,
		trim: true,
		required: "First name is required."
	},

	lastName: {
		type: String,
		trim: true,
		required: "Last name is required."
	},

	username: {
		type: String,
		trim: true,
		unique: true,
		required: "Username is required."
	},

	password: {
		type: String,
		trim: true,
		required: "Password is required.",
		validate: [
			(input) => {
				return input.length >= 8;
			},
			"Password must be at least 8 characters long."
		]
	},

	profileImage: {
		type: String
	},

	isAdmin: {
		type: Boolean,
		default: false
	},

	userCreated: {
		type: Date,
		default: Date.now()
	},

	lastUpdated: Date,

	fullName: String,

	ideas: [
		{
			type: Schema.Types.ObjectId,
			ref: "Idea"
		}
	],

	campaigns: [
		{
			type: Schema.Types.ObjectId,
			ref: "Campaign"
		}
	]

});

const User = mongoose.model("User", UserSchema);

module.exports = User;