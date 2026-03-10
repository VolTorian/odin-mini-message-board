const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function createMessage(name, message) {
    await pool.query("INSERT INTO messages (name, message, timestamp) VALUES ($1, $2, $3)", [name, message, new Date().toISOString()])
}

module.exports = {
    getAllMessages,
    createMessage
};