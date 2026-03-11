const { body, validationResult, matchedData } = require("express-validator");
const db = require("../db/queries");

const validateName = [
    body("name").trim()
        .matches(/^[a-zA-Z0-9_]+$/).withMessage("Name must only contain letters, numbers, and underscores")
        .isLength({ min: 3, max: 20 }).withMessage("Name must be between 3 and 20 characters")
]

const validateMessage = [
    body("message").trim()
        .isLength({ min: 1, max: 500 }).withMessage("Message must be between 1 and 500 characters")
]

messageCreatePost = [
    validateName,
    validateMessage,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("form", {
                nameErrors: errors.array().filter((error) => error.path === "name"),
                messageErrors: errors.array().filter((error) => error.path === "message"),
            });
        }
        const { name, message } = matchedData(req);
        await db.createMessage(name, message);
        res.redirect("/");
    }
]

module.exports = {
    messageCreatePost
}