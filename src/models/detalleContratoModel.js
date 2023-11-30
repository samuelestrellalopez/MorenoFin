const db = require('../config/db');

class DetalleContrato {
  constructor(id, tipoContrato, fechaRegistro) {
    this.id = id;
    this.tipoContrato = tipoContrato;
    this.fechaRegistro = fechaRegistro;
  }

  static async getAll() {
    const query = 'SELECT * FROM DetalleContrato';
    try {
      const detallesContrato = await db.query(query);
      return detallesContrato;
    } catch (error) {
      throw new Error('Error al obtener todos los detalles de contrato.');
    }
  }

  static async getById(id) {
    const query = 'SELECT * FROM DetalleContrato WHERE id = ?';
    try {
      const detalleContrato = await db.query(query, [id]);
      return detalleContrato[0];
    } catch (error) {
      throw new Error('Error al obtener el detalle de contrato por ID.');
    }
  }

  static async create(tipoContrato, fechaRegistro) {
    const query = 'INSERT INTO DetalleContrato (tipo_contrato, fecha_registro) VALUES (?, ?)';
    try {
      const result = await db.query(query, [tipoContrato, fechaRegistro]);
      return result.insertId;
    } catch (error) {
      throw new Error('Error al crear un nuevo detalle de contrato.');
    }
  }
}

module.exports = DetalleContrato;
