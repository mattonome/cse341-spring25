const express = require("express");
const app = express();


// app.get("/", (req, res) => {
//   res.send("Welcome to my Express server!");
// });

const port = 3000;

app.use('/', require('./routes'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
