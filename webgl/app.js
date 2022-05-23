require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// app.get('/', res => res.send('Hello World!'))
app.listen(port, () => console.log("Example app listening on port 3000!"));

app.use(express.static("src"));
