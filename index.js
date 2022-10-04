const express = require('express');
const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // insert password
  socket: '', // insert socket
  database: 'bccr_email'
});


app.get("/", function (req, res) {
  var q = "SELECT COUNT(*) AS count FROM users"; //Find count of users in DB
  connection.query(q, function (err, results) {
    if (err) throw err;
    var count = results[0].count;
    res.render("home", { count: count });
  });
});

app.post('/register', function (req, res) {
  var person = { firstname: req.body.firstname, lastname: req.body.lastname, email: req.body.email };

  connection.query('INSERT INTO signed_up SET ?', person, function (err, result) {
    console.log(err);
    console.log(result);
    res.render("thanks.ejs"); //Takes the user to the "Thank you" page.
  });
});

app.post('/thanks', function (req, res) {
  res.render("thanks");
});

app.listen(5500, function () {
  console.log('App is listening on port 5500!')
});