const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const v1CartoonRouter = require("./v1/routes/cartoonRoutes");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/cartoons", v1CartoonRouter);

app.use(express.static(path.join(__dirname, "..", "..", "client", "build")));

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "client", "build", "index.html"));
});

app.listen(PORT, (error) => {
    if (error) {
        console.error(error);
        console.log("Error...");
    } else {
        console.log(`Server listening on ${PORT}`);
    }
});
