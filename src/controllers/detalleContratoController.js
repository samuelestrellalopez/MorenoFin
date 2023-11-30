const DetalleContratoService = require('../services/detalleContratoService');

class DetalleContratoController {
  static async getAllDetallesContrato(req, res) {
    try {
      const detallesContrato = await DetalleContratoService.getAllDetallesContrato();
      res.json(detallesContrato);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los detalles de contrato.' });
    }
  }

  static async getDetalleContratoById(req, res) {
    const { id } = req.params;
    try {
      const detalleContrato = await DetalleContratoService.getDetalleContratoById(id);
      res.json(detalleContrato);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el detalle de contrato por ID.' });
    }
  }

  static async createDetalleContrato(req, res) {
    const { tipoContrato, fechaRegistro } = req.body;
    try {
      const nuevoDetalleContratoId = await DetalleContratoService.createDetalleContrato(tipoContrato, fechaRegistro);
      res.json({ id: nuevoDetalleContratoId, mensaje: 'Detalle de contrato creado exitosamente.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear un nuevo detalle de contrato.' });
    }
  }
}

module.exports = DetalleContratoController;
