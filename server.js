// Requires / PORT 
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes
app.use(routes);

// Connect to the Mongo DB googleBooksReact
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleBooksReact");

// Start the API server
app.listen(PORT, function() {
  console.log(`API Server now listening on PORT:  ${PORT}!`);
});


//TODO
//Fix Front end for Booksview
// Add GoogleAPI Books to be saved to list
// Host on Github, heroku + react = no