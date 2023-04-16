const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const mysql = require('mysql');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'db_user',
    password: 'admin',
    database: 'empresa',
    port: 3306
  });

connection.connect();

app.get("/api/empresa", async (req, res) => {
    let sqlQuery = 'SELECT * FROM job';
    connection.query(sqlQuery, (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
})

app.get("/api/job/:id", async (req, res) => {
    const userId = req.params.id;
    const values = [userId];
    let sql = 'SELECT * FROM job WHERE Job_Code = ?'
    connection.query(sql, values, (err, row) => {
        if (err) throw err;
        res.send(row);
    });
})

app.get("/api/hello", (req, res) => {
    res.json({message: "Hello form server side!"});
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
