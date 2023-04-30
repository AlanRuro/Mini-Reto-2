const express = require("express");
//const compression = require("compression");
const cors = require("cors");
const bodyParser = require("body-parser");
const v1CartoonRouter = require("./v1/routes/cartoonRoutes");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
//app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/cartoons", v1CartoonRouter);

app.listen(PORT, (error) => {
    if (error) {
        console.error(error);
        console.log("Error...");
    } else {
        console.log(`Server listening on ${PORT}`);
    }
});
