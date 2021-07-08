const debug = require("debug")("app:startup"); // set env 'export DEBUG='app:startup'
const express = require("express");
const morgan = require("morgan");
// const cookieSession = require('cookie-session');
// const keys = require('./config/keys')
// const passport = require('passport');
const app = express();

// Log Traffic
if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  debug("Morgan enabled...");
}

// public
app.use(express.static("public"));

// Views
app.set("view engine", "ejs");

//Cookie-Session
// app.use(cookieSession({
//     name: 'session',
//     keys: [keys.PP_SECRET],
//     maxAge: 14 * 24  * 60 * 60 * 1000
// }))

// Passport Init
// app.use(passport.initialize());
// app.use(passport.session());
// require("./config/passportsetup")();

// Req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(require("./routes"));

const port = process.env.PORT | "3001";

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
