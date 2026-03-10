const { body, validationResult, matchedData } = require("express-validator");
const db = require("../db/queries");

const messages = require("../messages")

async function messageListGet(req, res) {
    const dbmessages = await db.getAllMessages();
    console.log("TESTING IN GETTING ALL MESSAGES")
    console.log(dbmessages);
    // dbmessages.forEach((entry) => console.log(entry))
    res.render("index", { title: "Message Board", messages: dbmessages });
}

module.exports = {
    messageListGet
}