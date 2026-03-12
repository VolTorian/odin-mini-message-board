const { Pool } = require("pg");

module.exports = new Pool({
    // host: process.env.HOST,
    // user: process.env.USER,
    // database: process.env.DATABASE,
    // password: process.env.PASSWORD,
    // port: process.env.PSQL_PORT

    host: process.env.PGHOST,
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});