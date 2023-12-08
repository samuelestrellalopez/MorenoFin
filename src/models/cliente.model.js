// cliente.model.js
const db = require('../config/db');

class Cliente {
  constructor(id, nombreCompleto, correoElectronico, numeroTelefono, contratoId) {
    this.id = id;
    this.nombreCompleto = nombreCompleto;
    this.correoElectronico = correoElectronico;
    this.numeroTelefono = numeroTelefono;
    this.contratoId = contratoId;
  }

  static async create(nombreCompleto, correoElectronico, numeroTelefono, contratoId) {
    const query = 'INSERT INTO Cliente (nombre_completo, correo_electronico, numero_telefono, contrato_id) VALUES (?, ?, ?, ?)';
    try {
      const result = await db.query(query, [nombreCompleto, correoElectronico, numeroTelefono, contratoId]);
      return result.insertId;
    } catch (error) {
      console.error('Error al crear un nuevo cliente en la base de datos:', error);
      throw new Error('Error al crear un nuevo cliente.');
    }
  }

  static async getById(id) {
    const query = 'SELECT * FROM Cliente WHERE id = ?';
    try {
      const cliente = await db.query(query, [id]);
      return cliente[0];
    } catch (error) {
      throw new Error('Error al obtener el cliente por ID.');
    }
  }

  static async getByContratoId(contratoId) {
    const query = 'SELECT * FROM Cliente WHERE contrato_id = ?';
    try {
      const clientes = await db.query(query, [contratoId]);
      return clientes;
    } catch (error) {
      throw new Error('Error al obtener los clientes por ID de contrato.');
    }
  }
}

module.exports = Cliente;
