const express = require('express');
const router = express.Router();
const plantillaContratoController = require('../controllers/PlantillaContratoController');

router.post('/plantillas_contrato', plantillaContratoController.createPlantillaContrato);
router.get('/plantillas_contrato/:id', plantillaContratoController.getPlantillaContratoById);
router.get('/plantillas_contrato', plantillaContratoController.getAllPlantillasContrato);
router.put('/plantillas_contrato/:id', plantillaContratoController.updatePlantillaContrato);
router.delete('/plantillas_contrato/:id', plantillaContratoController.deletePlantillaContrato);

module.exports = router;
