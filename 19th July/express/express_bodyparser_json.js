// same pattern as above, require express, invoke the express function
const express = require("express");
const app = express();
const bodyParser = require("body-parser")
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 


app.get("/", (req, res) => {
  res.status(200).json({ name: "Elie" });
});

app.get("/secret", (req, res) => {
  res.status(401).json({ message: "Unauthorized" });
});

app.listen(3000, function() {
  console.log(
    "The server has started on port 3000. Head to localhost:3000 in the browser and see what's there!"
  );
});