// cliente.service.js
const ClienteModel = require('../models/cliente.model');

class ClienteService {
  static async createCliente(nombreCompleto, correoElectronico, numeroTelefono, contratoId) {
    return await ClienteModel.create(nombreCompleto, correoElectronico, numeroTelefono, contratoId);
  }

  static async getClienteById(id) {
    return await ClienteModel.getById(id);
  }

  static async getClientesByContratoId(contratoId) {
    return await ClienteModel.getByContratoId(contratoId);
  }
}

module.exports = ClienteService;
