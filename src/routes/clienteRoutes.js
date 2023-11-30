const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/clienteController');

router.get('/clientes', ClienteController.getAllClientes);
router.get('/clientes/:id', ClienteController.getClienteById);
router.post('/clientes', ClienteController.createCliente);

module.exports = router;
