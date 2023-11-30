const DetalleContrato = require('../models/detalleContratoModel');

class DetalleContratoService {
  static async getAllDetallesContrato() {
    return await DetalleContrato.getAll();
  }

  static async getDetalleContratoById(id) {
    return await DetalleContrato.getById(id);
  }

  static async createDetalleContrato(tipoContrato, fechaRegistro) {
    return await DetalleContrato.create(tipoContrato, fechaRegistro);
  }
}

module.exports = DetalleContratoService;
