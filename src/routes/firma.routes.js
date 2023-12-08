// firma.routes.js
const express = require('express');
const FirmaController = require('../controllers/firma.controller');

const router = express.Router();

router.post('/clientes/:clienteId/firmas', FirmaController.createFirma);
router.get('/clientes/:clienteId/firmas', FirmaController.getFirmasByClienteId);

module.exports = router;
