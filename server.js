const util = require("until");
const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
    

    host: "localhost",
  
    // Port
    port: 3306,
  
    // username
    user: "root",
  
    // password
    password: process.env.MYSQLPW,
    database: "tracker-db"
  
})

connection.connect(function(err) {
    if (err) throw err;
});

connection.connect();

connection.query = until.promisify(connection.query);

module.exports = connection; 