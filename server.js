const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

const cors = require("cors");

const passport = require("passport");
const users = require("./routes/api/users");
const patients = require("./routes/api/patients");


app.use(cors());

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// This block configures the database connection.
const db = require("./config/keys").mongoURI;

// Connect to MongoDB, then console log that this has been done, and catch errors if they occur.
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  // Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

app.use("/api/patients", patients);

//Port set at 8515
const port = process.env.PORT || 8515; 
app.listen(port, () => console.log(`Server up and running on port ${port} !!`));