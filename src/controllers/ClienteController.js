const ClienteService = require('../services/clienteService');

class ClienteController {
  static async getAllClientes(req, res) {
    try {
      const clientes = await ClienteService.getAllClientes();
      res.json(clientes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los clientes.' });
    }
  }

  static async getClienteById(req, res) {
    const { id } = req.params;
    try {
      const cliente = await ClienteService.getClienteById(id);
      res.json(cliente);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el cliente por ID.' });
    }
  }

  static async createCliente(req, res) {
    const { nombreCompleto, correoElectronico, numeroTelefono } = req.body;
    try {
      const nuevoClienteId = await ClienteService.createCliente(nombreCompleto, correoElectronico, numeroTelefono);
      res.json({ id: nuevoClienteId, mensaje: 'Cliente creado exitosamente.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear un nuevo cliente.' });
    }
  }
}

module.exports = ClienteController;
