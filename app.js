const express = require('express');

const app = express();

app.get("/", (req, res,next) => {
    res.write("Hello world from gitpod!");
});
app.listen(3000);