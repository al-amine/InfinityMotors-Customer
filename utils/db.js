var mysql = require('mysql');
require('dotenv').config();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'YOURPASSWORD',
  database : 'infinitymotors'
});

// var connection = mysql.createConnection({
//   host     : process.env.DB_HOST,
//   user     : process.env.DB_USER,
//   password : process.env.DB_PASSWORD,
//   database : process.env.DB_DATABASE
// });

module.exports = connection;