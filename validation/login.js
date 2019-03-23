const Validator = require("validator");
const isEmpty = require("is-empty");

// Validates User Input from User Registration Form
module.exports = function validateRegisterInput(data) {
	let errors = {};

	// Converts Empty Form Fields to Empty String Before Running Validator
	data.username = !isEmpty(data.username) ? data.username : "";
	data.password = !isEmpty(data.password) ? data.password : "";

	// Check for Empty Form Fields, Valid Username, Correct Password
	// Sets Errors for Unmet Requirements

	// Email Checks
	if (Validator.isEmpty(data.username)) {
		errors.username = "Please enter your username";
	}

	// Password Checks
	if (Validator.isEmpty(data.password)) {
		errors.password = "Please enter your password";
	}

	// Return Errors
	return {
		errors,
		isValid: isEmpty(errors)
	};

};