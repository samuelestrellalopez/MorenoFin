const Cliente = require('../models/clienteModel');

class ClienteService {
  static async getAllClientes() {
    return await Cliente.getAll();
  }

  static async getClienteById(id) {
    return await Cliente.getById(id);
  }

  static async createCliente(nombreCompleto, correoElectronico, numeroTelefono) {
    return await Cliente.create(nombreCompleto, correoElectronico, numeroTelefono);
  }
}

module.exports = ClienteService;
