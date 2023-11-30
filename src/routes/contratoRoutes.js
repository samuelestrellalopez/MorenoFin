const express = require('express');
const router = express.Router();
const ContratoController = require('../controllers/contratoController');
const multer = require('multer');

// Configuración de Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.pdf');
  }
});

const upload = multer({ storage: storage });

router.post('/contratos', upload.single('pdfContrato'), ContratoController.subirContrato);
router.get('/contratos', ContratoController.getAllContratos);
router.get('/contratos/:id', ContratoController.getContratoById);
router.put('/contratos/:id/estado', ContratoController.updateContratoState);
router.get('/contratos/:id/descargar', ContratoController.downloadContratoPdf);

module.exports = router;
