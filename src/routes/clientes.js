const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/ClienteController');

router.post('/clientes', clienteController.createCliente);
router.get('/clientes/:id', clienteController.getClienteById);
router.get('/clientes', clienteController.getAllClientes);
router.put('/clientes/:id', clienteController.updateCliente);
router.delete('/clientes/:id', clienteController.deleteCliente);

module.exports = router;
