const express = require("express");
const mongoose = require("mongoose");
const db = require("./models");
const path = require("path");
const PORT = process.env.PORT || 3001;

const bodyParser = require("body-parser");
const passport = require("passport");

// User Authentication Routes
const userAuthRoutes = require("./routes/api/userAuthentication");

// Initialize Express
const app = express();

// Middleware
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
};

// Connect to DataBase
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/renivent", { useNewUrlParser: true })
	.then(console.log("Connected to MongoDB"));

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});
