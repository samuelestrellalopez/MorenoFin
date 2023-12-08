// contrato.model.js
const db = require('../config/db');

class Contrato {
  constructor(id, pdfContrato, estado, tipoContrato, fechaRegistro, financieroId) {
    this.id = id;
    this.pdfContrato = pdfContrato;
    this.estado = estado;
    this.tipoContrato = tipoContrato;
    this.fechaRegistro = fechaRegistro;
    this.financieroId = financieroId;
  }

  static async getAll() {
    const query = 'SELECT * FROM Contrato';
    try {
      const contratos = await db.query(query);
      return contratos;
    } catch (error) {
      throw new Error('Error al obtener todos los contratos.');
    }
  }

  static async getById(id) {
    const query = 'SELECT * FROM Contrato WHERE id = ?';
    try {
      const contrato = await db.query(query, [id]);
      return contrato[0];
    } catch (error) {
      throw new Error('Error al obtener el contrato por ID.');
    }
  }

  async create() {
    const query = 'INSERT INTO Contrato (pdf_contrato, estado, tipo_contrato, fecha_registro, financiero_id) VALUES (?, ?, ?, NOW(), ?)';
    try {
      const result = await db.query(query, [this.pdfContrato, this.estado, this.tipoContrato, this.financieroId]);
      return result.insertId;
    } catch (error) {
      console.error('Error al crear un nuevo contrato en la base de datos:', error);
      throw new Error('Error al crear un nuevo contrato.');
    }
    
  }
  
  static async updateState(id, newState) {
    const query = 'UPDATE Contrato SET estado = ? WHERE id = ?';
    try {
      await db.query(query, [newState, id]);
    } catch (error) {
      throw new Error('Error al actualizar el estado del contrato.');
    }
  }

  static async downloadPdf(id) {
    const query = 'SELECT pdf_contrato FROM Contrato WHERE id = ?';
    try {
      const result = await db.query(query, [id]);
      return result[0].pdf_contrato;
    } catch (error) {
      throw new Error('Error al descargar el contrato en formato PDF.');
    }
  }
}

module.exports = Contrato;
