// cliente.routes.js
const express = require('express');
const ClienteController = require('../controllers/cliente.controller');

const router = express.Router();

router.post('/registrar', ClienteController.createCliente);
router.get('/:id', ClienteController.getClienteById);
router.get('/contrato/:contratoId', ClienteController.getClientesByContratoId);

module.exports = router;
