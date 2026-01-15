const { Router } = require("express");
const indexRouter = Router();
const messages = require("../messages");

indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Message Board", messages: messages });
});

module.exports = indexRouter;