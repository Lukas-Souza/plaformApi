const express = require('express')
const app = express()
const routrs = require('./routes/index')
const PORT = 3000
app.use(express.json())

app.use('/', routrs)


app.listen(PORT, () => {
    console.log("API RODANDO: http://localhost:"+ PORT)
})







