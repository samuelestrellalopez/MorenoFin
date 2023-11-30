const Firma = require('../models/firmaModel');

class FirmaService {
  static async getAllFirmas() {
    return await Firma.getAll();
  }

  static async getFirmaById(id) {
    return await Firma.getById(id);
  }

  static async createFirma(keyCliente, nombreCliente, contraseñaCliente, efirma, contratoId, certificado) {
    return await Firma.create(keyCliente, nombreCliente, contraseñaCliente, efirma, contratoId, certificado);
  }
}

module.exports = FirmaService;
