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

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to DB");
});

app.get("/api/cartoons", (req, res) => {
    let sqlQuery = "SELECT * FROM cartoons;";
    connection.query(sqlQuery, (error, rows) => {
        if (error) throw error;
        res.send(rows);
    });
});

app.get("/api/cartoons/:cartoon_id", (req, res) => {
    const cartoonId = req.params.cartoon_id;
    let sqlQuery = "SELECT * FROM cartoons WHERE cartoon_id = ?;";
    connection.query(sqlQuery, cartoonId, (error, row) => {
        if (error) throw error;
        res.send(row);
    });
});

app.post("/api/cartoons", (req, res) => {
    const { 
        body: { cartoon_name, cartoon_channel }
    } = req;
    const values = [cartoon_name, cartoon_channel];
    let sqlQuery = "INSERT INTO cartoons(cartoon_name, cartoon_channel) VALUES (?, ?);";
    connection.query(sqlQuery, values, (error, rows) => {
        if (error) throw error;
        res.send(rows);
    });
});

app.patch("/api/cartoons:cartoon_id)", (req, res) => {
    const {
        params: { cartoon_id },
        body
    } = req;
    let values = [];
    let sqlQuery = "UPDATE cartoons SET ";
    for (const key in body) {
        sqlQuery += `${key} = ?, `;
        values.push(body[key]);
    }
    sqlQuery = sqlQuery.slice(0, -2);
    sqlQuery += " WHERE cartoon_id = ?;";
    values.push(cartoon_id);
    connection.query(sqlQuery, values, (error, rows) => {
        if (error) throw error;
        res.sendStatus(201);
    });
});

app.delete("/api/cartoons/:cartoon_id", (req, res) => {
    const cartoonId = req.params.cartoon_id;
    let sqlQuery = "DELETE FROM cartoons WHERE cartoon_id = ?;";
    connection.query(sqlQuery, cartoonId, (error, result) => {
        if (error) throw error;
        res.sendStatus(204);
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
