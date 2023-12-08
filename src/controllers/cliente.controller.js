// cliente.controller.js
const ClienteService = require('../services/cliente.service');

class ClienteController {
  static async createCliente(req, res, next) {
    try {
      const { nombreCompleto, correoElectronico, numeroTelefono, contratoId } = req.body;

      const clienteId = await ClienteService.createCliente(nombreCompleto, correoElectronico, numeroTelefono, contratoId);

      res.status(201).json({ id: clienteId, mensaje: 'Cliente registrado exitosamente.' });
    } catch (error) {
      next(error);
    }
  }

  static async getClienteById(req, res, next) {
    try {
      const { id } = req.params;
      const cliente = await ClienteService.getClienteById(id);

      res.status(200).json(cliente);
    } catch (error) {
      next(error);
    }
  }

  static async getClientesByContratoId(req, res, next) {
    try {
      const { contratoId } = req.params;
      const clientes = await ClienteService.getClientesByContratoId(contratoId);

      res.status(200).json(clientes);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ClienteController;
