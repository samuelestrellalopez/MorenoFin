const express = require('express');
const router = express.Router();
const financieroController = require('../controllers/financieroController');

router.post('/financieros', financieroController.createFinanciero);
router.get('/financieros/:id', financieroController.getFinancieroById);
router.get('/financieros', financieroController.getAllFinancieros);
router.put('/financieros/:id', financieroController.updateFinanciero);
router.delete('/financieros/:id', financieroController.deleteFinanciero);

module.exports = router;
