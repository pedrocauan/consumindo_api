
//BACK
const cors = require("cors")
const express = require("express")
const app = express()
const axios = require("axios")
const { restart } = require("nodemon")


app.use(cors()) //Evita problemas relacionados a conflitos de portas com o browser

//Rota que tá a API
app.get("/", async (req, res) => {
    /*==== SERVINDO A API === */
    try {
        //response é a resposta do axios, mas eu tiro o data de dentro do response
        const { data } = await axios("https://jsonplaceholder.typicode.com/users") /*endereço da api que o backend vai consumir*/
        return res.json(data) /*enviando os dados da API via json para o front*/
    } catch (error) {
        console.log(error)
    }


})

app.listen("4567")