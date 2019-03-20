const path = require("path");

// Environmental Variables
// require("dotenv").config();
const dotenv = require('dotenv').config({path: path.join(__dirname, '.env')})

const express = require("express");
const mongoose = require("mongoose");
// const db = require("./models");
const passport = require("passport");

// Port
const PORT = process.env.PORT || 3001;

// User Authentication Routes
const userAuthRoutes = require("./routes/api/userAuthentication");

// Initialize Express
const app = express();

// Middleware
const bodyParser = require("body-parser");
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());

// Passport Configuration
require("./config/passport")(passport);

// App Routing
app.use("/api/userAuthentication", userAuthRoutes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
};

// Connect to DataBase
mongoose
	.connect(process.env.MONGODB_URI || "mongodb://localhost/reniventdb", { useNewUrlParser: true })
	.then(console.log("Connected to MongoDB!"));

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});
