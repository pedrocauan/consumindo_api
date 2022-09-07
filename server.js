
//BACK
const cors = require("cors")
const express = require("express")
const app = express()

app.use(cors())

app.get("/", (req, res) => {
    //tente a espera dessa
    try{
        res.json([
            {name: "jeff"},
            {name:"diego"}
        ])
    } catch(error) {
        console.log(error)
    }
   
})



app.listen("4567")