const express = require("express")
const app = express()


app.get("/", (req, res) => {
    res.json([
        {name: "jeff"},
        {name:"diego"}
    ])
})



app.listen("4567")