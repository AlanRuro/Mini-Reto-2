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

connection.query('SELECT * FROM job', (err, rows, fields) => {
    if (err) throw err
  
    console.log('The job description is: ', rows[0].Job_Description)
  })
  
connection.end();


app.get("/api/hello", (req, res) => {
    res.json({message: "Hello form server side!"});
})

app.get("/api/cartoons", (req, res) => {
    fs.readFile(__dirname + "/cartoons.json", "utf-8", (err, data) => {
        console.log(data);
        res.end(data);
    })
})

app.post("/api/cartoons", (req, res) => {
    console.log("El cuerpo y vida de la peticion: ", req.body);
    res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
