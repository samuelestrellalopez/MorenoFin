// financiero.controller.js
const FinancieroService = require('../services/financiero.service');
const jwt = require('jsonwebtoken');

class FinancieroController {
  static async registrarFinanciero(req, res, next) {
    try {
      const { nombre, apellido, email, telefono, direccion, password } = req.body;
      const financieroData = { nombre, apellido, email, telefono, direccion, password };

      const financieroId = await FinancieroService.registrarFinanciero(financieroData);

      res.status(201).json({ id: financieroId, mensaje: 'Financiero registrado exitosamente' });
    } catch (error) {
      next(error);
    }
  }

  static async iniciarSesion(req, res, next) {
    try {
      const { email, password } = req.body;
      const financiero = await FinancieroService.iniciarSesion(email, password);

      // Generar token
      const token = jwt.sign({ id: financiero.id, email: financiero.email }, 'secreto', { expiresIn: '1h' });

      res.status(200).json({ id: financiero.id, token, mensaje: 'Inicio de sesión exitoso' });
    } catch (error) {
      next(error);
    }
  }
}


module.exports = FinancieroController;
