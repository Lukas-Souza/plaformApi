const express = require('express')
const router = express.Router() // Criação de routas
const { default: knex } = require('knex');
const controller = require('../controllers/index')

router.get('/', controller.selectAll)
router.get('/user/:id', controller.searchById)

module.exports = router;