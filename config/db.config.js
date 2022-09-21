'use strict';

const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sos@2022#',
    database: 'SOSPET'
});

dbConn.connect(function(err){
    if(err) throw err;

    console.log("Database Connected!");
});

module.exports = dbConn;