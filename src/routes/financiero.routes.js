// financiero.routes.js
const express = require('express');
const FinancieroController = require('../controllers/financiero.controller');

const router = express.Router();

router.post('/registrarfinanciero', FinancieroController.registrarFinanciero);
router.post('/iniciar-sesion', FinancieroController.iniciarSesion);

module.exports = router;
