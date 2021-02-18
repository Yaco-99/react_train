require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const port = process.env.PORT || 4000;
const mongoUri = process.env.MONGO_URI;

const app = express();

// Options to pass to mongodb to avoid deprecation warnings
const options = {
  useNewUrlParser: true,
};

const conn = () => {
  mongoose.connect(mongoUri, options);
};
conn();

// Handle the database connection and retry as needed
const db = mongoose.connection;
db.on("error", (err) => {
  console.log("There was a problem connecting to mongo: ", err);
  console.log("Trying again");
  setTimeout(() => conn(), 5000);
});
db.once("open", () => console.log("Successfully connected to mongo"));

app.use(express.json());

const moviesRouter = require("./routes/movies");
app.use("/movies", moviesRouter);

app.listen(4000, () => console.log("server started"));
