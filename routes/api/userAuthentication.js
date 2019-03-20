const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

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

// User Login POST Route
router.post("/login", (req, res) => {

	// Validate Form Data (Pulls errors and isValid variables from validation function)
	const { errors, isValid } = validateLoginInput(req.body);

	if (!isValid) {
		return res.status(400).json(errors);
	}

	const username = req.body.username;
	const password = req.body.password;

	// Find User by username
	User.findOne({ username }).then(user => {
		// Ensure that user exists
		if (!user) {
			return res.status(404).json({ usernameNotFound: "Username does not exist"});
		}

		// Check Password
		bcrypt.compare(password, user.password).then(isMatch => {
			if (isMatch) {
				// User Matches, create JWT Payload
				const payload = {
					id: user.id,
					name: user.name
				};

				// Sign JSON Web Token
				jwt.sign(
					payload,
					keys.secretOrKey,
					{
						// Token Expires in 24 Hours
						expiresIn: 86400
					},
					(err, token) => {
						res.json({
							success: true,
							token: "Bearer " + token
						})
					}
				)
			} else {
				return res.status(400).json({ passwordIncorrect: "Password is incorrect" });
			}
		});
	});
});

module.exports = router;