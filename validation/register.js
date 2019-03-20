const Validator = require("validator");
const isEmpty = require("is-empty");

// Validates User Input from User Registration Form
module.exports = function validateRegisterInput(data) {
	let errors = {};

	// Converts Empty Form Fields to Empty String Before Running Validator
	data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
	data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
	data.username = !isEmpty(data.username) ? data.username : "";
	data.password = !isEmpty(data.password) ? data.password : "";
	data.passwordConfirm = !isEmpty(data.passwordConfirm) ? data.passwordConfirm : "";

	// Check for Empty Fields, Password Requirements Met and Confirm Password Matches
	// Sets Errors for Unmet Requirements

	// Name Checks
	if (Validator.isEmpty(data.firstName)) {
		errors.firstName = "First Name is Required";
	}

	if (Validator.isEmpty(data.lastName)) {
		errors.lastName = "Last Name is Required";
	}

	// Username Checks
	if (Validator.isEmpty(data.username)) {
		errors.username = "Username is required";
	}

	// Password Checks
	if (Validator.isEmpty(data.password)) {
		errors.password = "Password is required";
	}

	if (Validator.isEmpty(data.confirmPassword)) {
		errors.confirmPassword = "Please confirm your password";
	}

	if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
		errors.password = "Password must be at least 6 characters";
	}

	if (!Validator.equals(data.password, data.confirmPassword)) {
		errors.confirmPassword = "Passwords must match";
	}

	// Return Errors
	return {
		errors,
		isValid: isEmpty(errors)
	};

};