const express = require('express')
const router = express.Router() // Criação de routas
const { default: knex } = require('knex');
const controller = require('../controllers/index');
const { except } = require('../data');
const middleware = require("../middlewares/auth/verifyToken")
// Router get public 
router.get('/', controller.selectAll)
router.get('/filmes/:id', controller.searchById)

// Router login post for admin
router.post('/login', controller.authenticationUserToken)

// Router private crate itens for admin
router.post('/catalogo', middleware, controller.createItem) 
router.delete('/catalogo/:id', middleware, controller.deletItenStok)
router.get('/catalogo', middleware, controller.dasbordStok)
router.put('catalogo/:id', middleware, controller.putStok)


module.exports = router;