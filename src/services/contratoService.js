const Contrato = require('../models/contratoModel');

class ContratoService {
  static async getAllContratos() {
    return await Contrato.getAll();
  }

  static async getContratoById(id) {
    return await Contrato.getById(id);
  }

  static async createContrato(pdfContrato, estado) {
    try {
      const contratoId = await Contrato.create(pdfContrato, estado);
      return contratoId;
    } catch (error) {
      throw new Error('Error al crear un nuevo contrato.');
    }
  }
  
  static async updateContratoState(id, newState) {
    return await Contrato.updateState(id, newState);
  }

  static async downloadContratoPdf(id) {
    return await Contrato.downloadPdf(id);
  }
}
module.exports = ContratoService;
