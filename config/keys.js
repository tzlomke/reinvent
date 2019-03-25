const path = require("path");

// Environmental Variables
require('dotenv').config({path: path.join(__dirname, '.env')});

module.exports = {
	secretOrKey: process.env.SECRET
};