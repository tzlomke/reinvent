const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jqt = require("jsonwebtoken");

// Load Registration/Login Input Validation
const validateRegistrationInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User Model
const User = require("../../models/User");

// New User Registration POST Route
router.post("/register", (req, res) => {

	// Validate Form Data (Pulls errors and isValid variables from validation function)
	const { errors, isValid } = validateRegistrationInput(req.body);

	if (!isValid) {
		return releaseEvents.status(400).json(errors);
	}

	// Check to See if Username already exists on database
	User.findOne({ username: req.body.username }).then(user => {
		if (user) {
			return res.status.json({ username: "Username already exists" });
		}
	

		// If Validation Passes and Username does not exist, create new User object
		const newUser = new User({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			username: req.body.username,
			password: req.body.password
		});

		// Hash Password Before Storing to Database
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(newUser.password, salt, (err, hash) => {
				if (err) throw err;
				newUser.password = hash;
				newUser
					.save()
					.then(user => res.json(user))
					.catch(err => console.log(err));
			});
		});
	});
});