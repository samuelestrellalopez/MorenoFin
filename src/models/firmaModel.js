const db = require('../config/db');

class Firma {
  constructor(id, keyCliente, nombreCliente, contraseñaCliente, efirma, certificado, contratoId) {
    this.id = id;
    this.keyCliente = keyCliente;
    this.nombreCliente = nombreCliente;
    this.contraseñaCliente = contraseñaCliente;
    this.efirma = efirma;
    this.certificado = certificado;
    this.contratoId = contratoId;
  }

  static async getAll() {
    const query = 'SELECT * FROM Firma';
    try {
      const firmas = await db.query(query);
      return firmas;
    } catch (error) {
      throw new Error('Error al obtener todas las firmas.');
    }
  }

  static async getById(id) {
    const query = 'SELECT * FROM Firma WHERE id = ?';
    try {
      const firma = await db.query(query, [id]);
      return firma[0];
    } catch (error) {
      throw new Error('Error al obtener la firma por ID.');
    }
  }

  static async create(keyCliente, nombreCliente, contraseñaCliente, efirma, certificado, contratoId) {
    const query = 'INSERT INTO Firma (key_cliente, nombre_cliente, contraseña_cliente, efirma, certificado, contrato_id) VALUES (?, ?, ?, ?, ?, ?)';
    try {
      const result = await db.query(query, [keyCliente, nombreCliente, contraseñaCliente, efirma, certificado, contratoId]);
      return result.insertId;
    } catch (error) {
      throw new Error('Error al crear una nueva firma.');
    }
  }
}

module.exports = Firma;
