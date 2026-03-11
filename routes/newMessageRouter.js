const { Router } = require("express");
const newMessageRouter = Router();
const newMessageController = require("../controllers/newMessageController");

newMessageRouter.get("/", (req, res) => {
    res.render("form");
});

newMessageRouter.post("/", newMessageController.messageCreatePost);

module.exports = newMessageRouter;