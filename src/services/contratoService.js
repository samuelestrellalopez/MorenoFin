const Contrato = require('../models/contratoModel');

class ContratoService {
  static async getAllContratos() {
    return await Contrato.getAll();
  }

  static async getContratoById(id) {
    return await Contrato.getById(id);
  }
  static async createContrato(pdfContrato, estado, financieroId, tipoContrato) {
    try {
      const contrato = new Contrato(null, pdfContrato, estado, tipoContrato, null, financieroId);
      const contratoId = await contrato.create();
      return contratoId;
    } catch (error) {
      console.error('Error al crear un nuevo contrato en la base de datos:', error);
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
