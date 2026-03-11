const { body, validationResult, matchedData } = require("express-validator");
const db = require("../db/queries");

async function messageListGet(req, res) {
    const messages = await db.getAllMessages();
    res.render("index", { title: "Message Board", messages: messages });
}

module.exports = {
    messageListGet
}