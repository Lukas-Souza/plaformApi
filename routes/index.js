const express = require('express')
const router = express.Router() // Criação de routas
const { default: knex } = require('knex');
const controller = require('../controllers/index');
const { except } = require('../data');
const SECRET = "PASSWORSECRET8"
const jwt = require("jsonwebtoken")

router.get('/', controller.selectAll)
router.get('/user/:id', controller.searchById)
router.post('/login', async (req, res) => {
     if (req.body.user == "Root" && req.body.password == "123") {
        const Token = jwt.sign({ id: 19 }, SECRET, { expiresIn: 300 })
        console.log("erro")
        return res.json({mesagem: "Solicitação recebida com sucesso",auth: true,Token})
    }
    return await res.status(401).send("User não altorizado")
})
router.post('/o', (req, res) => {
    console.log("corpo rebebido com secesso " + req.body) 
 res.send("recebido!!")   
})

module.exports = router;