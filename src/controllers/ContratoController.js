const ContratoService = require('../services/contratoService');
const multer = require('multer');
const path = require('path');

// Configuración de Multer para almacenar archivos en disco
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueFilename = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueFilename + path.extname(file.originalname));
  }
});




class ContratoController {
  static async getAllContratos(req, res) {
    try {
      const contratos = await ContratoService.getAllContratos();
      res.json(contratos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los contratos.' });
    }
  }

  static async getContratoById(req, res) {
    const { id } = req.params;
    try {
      const contrato = await ContratoService.getContratoById(id);
      res.json(contrato);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el contrato por ID.' });
    }
  }

  static async subirContrato(req, res) {
    try {
      const estado = req.body.estado || 'pendiente';

      // Verificar si el archivo se subió correctamente
      if (!req.file) {
        return res.status(400).json({ error: 'No se proporcionó un archivo válido.' });
      }

      const filePath = req.file.path; // Multer agrega la propiedad 'path' al archivo

      // Puedes guardar el archivo en la base de datos utilizando ContratoService
      const contratoId = await ContratoService.createContrato(filePath, estado);

      // Devolver la ruta relativa del contrato
      const relativePath = `/uploads/${req.file.filename}`;

      res.json({ contratoId, mensaje: 'Contrato subido exitosamente.', contratoPath: relativePath });
    } catch (error) {
      console.error('Error al subir el contrato:', error);
      res.status(500).json({ error: 'Error al subir el contrato.' });
    }
  }
  
  static async updateContratoState(req, res) {
    const { id } = req.params;
    const { newState } = req.body;
    try {
      await ContratoService.updateContratoState(id, newState);
      res.json({ mensaje: 'Estado del contrato actualizado exitosamente.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar el estado del contrato.' });
    }
  }

  static async downloadContratoPdf(req, res) {
    const { id } = req.params;
    try {
      const pdfContrato = await ContratoService.downloadContratoPdf(id);
      // Lógica para enviar el archivo PDF al cliente
      res.end(pdfContrato);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al descargar el contrato en formato PDF.' });
    }
  }
}
function generateUniqueFilename(extension) {
  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
  return `file_${uniqueSuffix}.${extension}`;
}

module.exports = ContratoController;
