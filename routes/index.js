const express = require('express')
const router = express.Router() // Criação de routas
const { default: knex } = require('knex');
const controller = require('../controllers/index');
const { except } = require('../data');
const middleware = require("../middlewares/auth/verifyToken")
const SECRET = "PASSWORSECRET8"
const jwt = require("jsonwebtoken")

// Router get public 
router.get('/', controller.selectAll)
router.get('/filmes/:id', controller.searchById)

// Router login post for admin
router.post('/login', controller.authenticationUserToken)

// Router private crate itens for admin
router.post('/catalogo', middleware, controller.createItem) 
router.get('/catalogido', middleware, controller.dasbordStok)


module.exports = router;