const FinancieroModel = require('../models/financiero.model');
const jwt = require('jsonwebtoken');

class FinancieroService {
  static async registrarFinanciero(financieroData) {
    return await FinancieroModel.create(financieroData);
  }

  static async iniciarSesion(email, password) {
    const financiero = await FinancieroModel.findByEmail(email);

    if (!financiero || financiero.password !== password) {
      throw new Error('Credenciales inválidas');
    }

    return financiero;
  }
}

module.exports = FinancieroService;