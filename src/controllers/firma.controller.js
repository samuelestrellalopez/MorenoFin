// firma.controller.js
const FirmaService = require('../services/firma.service');

class FirmaController {
  static async createFirma(req, res, next) {
    try {
      const { certificadoArchivo, clavePrivadaArchivo, contrasenaPrivada, hashGenerado, clienteId } = req.body;

      await FirmaService.createFirma(certificadoArchivo, clavePrivadaArchivo, contrasenaPrivada, hashGenerado, clienteId);

      res.status(201).json({ mensaje: 'Firma creada exitosamente.' });
    } catch (error) {
      next(error);
    }
  }

  static async getFirmasByClienteId(req, res, next) {
    try {
      const { clienteId } = req.params;
      const firmas = await FirmaService.getFirmasByClienteId(clienteId);

      res.status(200).json(firmas);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = FirmaController;
