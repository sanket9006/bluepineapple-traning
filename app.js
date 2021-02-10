const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Listening on port 8080");
}) 

const port = 8080;
app.listen(port);