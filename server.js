// Express web server
// Import the express module
const express = require("express");

// Create an instance of express
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("Welcome to my Express server!");
});

// Define a port to run the server on
const port = process.env.PORT || 3000;

// Start the server and log when running
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
