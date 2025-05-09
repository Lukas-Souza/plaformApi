const express = require('express')
const cookie = require('cookie-parser')
const cors = require('cors')
const app = express()
const routrs = require('./routes/index')
const PORT = 3000

// midweres
require('dotenv').config();
app.use(cors({
    origin: 'http://127.0.0.1:5501', // ou o domínio do seu front-end
    credentials: true // permite cookies e headers com autenticação
  }));
app.use(cookie())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/', routrs)


app.listen(PORT, () => {
    console.log("API RODANDO: http://localhost:" + PORT)
    
})







