const { Router } = require("express");
const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
    res.render("form");
});

newMessageRouter.post("/", (req, res) => {
    res.send(`${req.body.name}: ${req.body.message}`);
});

module.exports = newMessageRouter;