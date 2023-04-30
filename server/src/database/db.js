const mysql = require("mysql");
require('dotenv').config()

const db = mysql.createPool({
    connectionLimit: 10,
    host: process.env.HOST || 'us-cdbr-east-06.cleardb.net',
    user: process.env.USER || 'bc589a1653347f',
    password: process.env.PASSWORD || 'af407ab0',
    database: process.env.DB || 'heroku_ddd339830b4ea7b',
    port: process.env.DB_PORT || 3306,
    multipleStatements: true,
    connectTimeout: 30000
});

// db.connect((error) => {
//     if (error) {
//         console.log("Error Connecting to DB");
//     } else {
//         console.log("Successfully Connected to DB");
//     }
// });

module.exports = db;