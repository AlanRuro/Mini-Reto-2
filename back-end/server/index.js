const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
