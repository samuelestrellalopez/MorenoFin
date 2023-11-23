const express = require('express');
const router = express.Router();
const contratoController = require('../controllers/ContratoController');

router.post('/contratos', contratoController.createContrato);
router.get('/contratos/:id', contratoController.getContratoById);
router.get('/contratos', contratoController.getAllContratos);
router.put('/contratos/:id', contratoController.updateContrato);
router.delete('/contratos/:id', contratoController.deleteContrato);

module.exports = router;
