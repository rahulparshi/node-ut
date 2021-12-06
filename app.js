const express = require('express');
const utils = require('./utils');

const app = express();

app.listen(3000, (req, res) => {
    console.log("listening on 3000");
})


app.get("/test", async (req, res) => {
    const response = await utils.getAPICALL("https://jsonplaceholder.typicode.com/todos/1");
    res.send(response)
})

module.exports = app;