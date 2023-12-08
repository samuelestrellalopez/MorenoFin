// firma.service.js
const FirmaModel = require('../models/firma.model');

class FirmaService {
  static async createFirma(certificadoArchivo, clavePrivadaArchivo, contrasenaPrivada, hashGenerado, clienteId) {
    return await FirmaModel.create(certificadoArchivo, clavePrivadaArchivo, contrasenaPrivada, hashGenerado, clienteId);
  }

  static async getFirmasByClienteId(clienteId) {
    return await FirmaModel.getByClienteId(clienteId);
  }
}

module.exports = FirmaService;
