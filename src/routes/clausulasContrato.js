const express = require('express');
const router = express.Router();
const clausulaContratoController = require('../controllers/ClausulaContratoController');

router.post('/clausulasContrato', clausulaContratoController.createClausulaContrato);
router.get('/clausulasContrato/:id', clausulaContratoController.getClausulaContratoById);
router.get('/clausulasContrato', clausulaContratoController.getAllClausulasContrato);
router.put('/clausulasContrato/:id', clausulaContratoController.updateClausulaContrato);
router.delete('/clausulasContrato/:id', clausulaContratoController.deleteClausulaContrato);

module.exports = router;
