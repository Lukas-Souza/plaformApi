const express = require('express')
const router = express.Router() // Criação de routas
const { default: knex } = require('knex');
const controller = require('../controllers/index');
const { except } = require('../data');
const middleware = require("./middlewares/auth/verifyToken.js")
const SECRET = "PASSWORSECRET8"
const jwt = require("jsonwebtoken")

router.get('/', controller.selectAll)
router.get('/user/:id', controller.searchById)
router.post('/login')
router.get('/stok', middleware, controller.stok)

module.exports = router;