const { body, validationResult, matchedData } = require("express-validator");

const validateName = [
    body("name").trim()
        .matches(/^[a-zA-Z0-9_]+$/).withMessage("Name must only contain letters, numbers, and underscores")
        .isLength({ min: 3, max: 20 }).withMessage("Name must be between 3 and 20 characters")
]

const validateMessage = [
    body("message").trim()
        .matches(/^[a-zA-Z0-9_]+$/).withMessage("Message must only contain letters, numbers, and underscores")
        .isLength({ min: 3, max: 2000 }).withMessage("Message must be between 3 and 2000 characters")
]

messageCreatePost = [
    validateName,
    validateMessage,
    async (req, res) => {
        console.log("test")
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.array())
            return res.status(400).render("form");
        }
        const { name } = matchedData(req);
        console.log("test username " + name);
    }
]

module.exports = {
    messageCreatePost
}