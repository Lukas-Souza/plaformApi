const express = require('express')
const cors = require('cors')
const app = express()
const routrs = require('./routes/index')
const PORT = 3000
require('dotenv').config();
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/', routrs)


app.listen(PORT, () => {
    console.log("API RODANDO: http://localhost:"+ PORT)
    console.log(`Request itens: http://localhost:${PORT}/filmes/1`)
})







