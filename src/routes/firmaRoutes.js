const express = require('express');
const router = express.Router();
const FirmaController = require('../controllers/firmaController');

router.get('/firmas', FirmaController.getAllFirmas);
router.get('/firmas/:id', FirmaController.getFirmaById);
router.post('/firmas', FirmaController.createFirma);

module.exports = router;
