const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");

app.use("/", indexRouter);
app.use("/new", newMessageRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Express app = listening on port ${PORT}.`);
});