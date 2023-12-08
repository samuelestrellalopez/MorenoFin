// firma.model.js
const db = require('../config/db');

class Firma {
  static async create(certificadoArchivo, clavePrivadaArchivo, contrasenaPrivada, hashGenerado, clienteId) {
    const query = 'INSERT INTO Firma (certificado_archivo, clave_privada_archivo, contrasena_privada, hash_generado, cliente_id) VALUES (?, ?, ?, ?, ?)';
    try {
      const result = await db.query(query, [certificadoArchivo, clavePrivadaArchivo, contrasenaPrivada, hashGenerado, clienteId]);
      return result.insertId;
    } catch (error) {
      console.error('Error al crear una nueva firma en la base de datos:', error);
      throw new Error('Error al crear una nueva firma.');
    }
  }

  static async getByClienteId(clienteId) {
    const query = 'SELECT * FROM Firma WHERE cliente_id = ?';
    try {
      const firmas = await db.query(query, [clienteId]);
      return firmas;
    } catch (error) {
      throw new Error('Error al obtener las firmas por ID de cliente.');
    }
  }
}

module.exports = Firma;
