const express = require('express')
const router = express.Router() // Criação de routas
const { default: knex } = require('knex');
const controller = require('../controllers/index');
const { except } = require('../data');
const SECRET = "PASSWORSECRET8"
const jwt = require("jsonwebtoken")

router.get('/', controller.selectAll)
router.get('/user/:id', controller.searchById)
router.post('/login')
router.get('/stok', controller.stok)

module.exports = router;