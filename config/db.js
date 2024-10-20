const mysql = require('mysql2');

// Create a MySQL connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '@$09075674654adAAA', // Replace with your MySQL password
    database: 'pharmacy_store' // Replace with your database name
});

module.exports = pool.promise(); // Export the connection pool as a promise-based API
