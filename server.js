require("dotenv").config();
const port = process.env.PORT || 3001; // process.env.port is Heroku's port if you choose to deploy the app there
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const routes = require("./routes");

const app = express();

app.use(express.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
    .connect(
        "mongodb://localhost/sports_app_db",
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use(routes)

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
