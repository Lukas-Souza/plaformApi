const express = require('express')
const router = express.Router() // Criação de routas
const controller = require('../controllers/index');
const middleware = require("../middlewares/auth/verifyToken");

// Router get public 
router.get('/', controller.selectAll)
router.get('/catalogo', controller.searchById)

// Router login post for admin
router.post('/login', controller.authenticationUser)

// Router private crate itens for admin
router.post('/catalogo', middleware, controller.createItem) 
router.delete('/catalogo/', middleware, controller.deletItenStok)
router.put('catalogo/:id', middleware, controller.putStok)



module.exports = router;