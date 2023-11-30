const express = require('express');
const router = express.Router();
const DetalleContratoController = require('../controllers/detalleContratoController');

router.get('/detalle-contrato', DetalleContratoController.getAllDetallesContrato);
router.get('/detalle-contrato/:id', DetalleContratoController.getDetalleContratoById);
router.post('/detalle-contrato', DetalleContratoController.createDetalleContrato);

module.exports = router;
