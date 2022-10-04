const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');



const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ' ',
  socket: ' ',
  database: 'bccr_email'
});


var data = [];

for (let i = 0; i < 1483; i++) {
  data.push([
    faker.name.firstName(),
    faker.name.lastName(),
    faker.internet.email(),
    faker.date.past()
  ]);
}

// console.log(data);

var q = 'INSERT INTO signed_up (firstname, lastname, email, created_at) VALUES ?';

connection.query(q, [data], function (err, result) {
  console.log(err);
  console.log(result);
});

connection.end();



///////////////////////////
