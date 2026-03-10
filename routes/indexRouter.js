const { Router } = require("express");
const indexRouter = Router();
// const messages = require("../messages");
const indexController = require("../controllers/indexController")

// indexRouter.get("/", (req, res) => {
//     res.render("index", { title: "Message Board", messages: messages });
// });
indexRouter.get("/", indexController.messageListGet);

module.exports = indexRouter;