
//BACK
const cors = require("cors")
const express = require("express")
const app = express()
const axios = require("axios")
const { restart } = require("nodemon")


app.use(cors())

app.get("/", async (req, res) => {
    //response é a resposta do axios, mas eu tiro o data de dentro do response
    const { data } = await axios("https://jsonplaceholder.typicode.com/users")
    return res.send(data)
   
})



app.listen("4567")