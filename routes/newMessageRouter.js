const { Router } = require("express");
const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => res.send("New message page"));

module.exports = newMessageRouter;