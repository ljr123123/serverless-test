const express = require("express")

const app = express()

app.get("/download", (req, res) => {
    console.log(req.query);
    res.send(req.query);
});

app.listen(8080, () => console.log("While listen 8080...."));