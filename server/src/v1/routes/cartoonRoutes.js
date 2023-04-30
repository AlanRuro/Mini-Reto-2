const express = require("express");
const cartoonController = require("../../controllers/cartoonController");

const apicache = require("apicache");
const router = express.Router();

const cache = apicache.middleware;

router.get("/", cache("1 minute"), cartoonController.getAllCartoons);

router.get("/", cartoonController.getAllCartoons);

router.get("/:cartoonId", cartoonController.getOneCartoon);

router.post("/", cartoonController.createNewCartoon);

router.patch("/:cartoonId", cartoonController.updateOneCartoon);

router.delete("/:cartoonId", cartoonController.deleteOneCartoon);

module.exports = router;