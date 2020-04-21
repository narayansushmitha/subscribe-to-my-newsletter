const express = require("express");
const bodyParser = require('body-parser');
const request = require("request");

const app = express();
const port = '3000';
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
  var firstName = req.body.fname;
  var lastName = req.body.lname;
  var email = req.body.email;
});

app.listen(port);

// Mailchimp api key
// 381ed60f027d6311f8e5cfd68aa4c5bd-us4

// list id 
// d2eb1d7915
