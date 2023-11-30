const db = require('../config/db');

class Cliente {
  constructor(id, nombreCompleto, correoElectronico, numeroTelefono) {
    this.id = id;
    this.nombreCompleto = nombreCompleto;
    this.correoElectronico = correoElectronico;
    this.numeroTelefono = numeroTelefono;
  }

  static async getAll() {
    const query = 'SELECT * FROM Cliente';
    try {
      const clientes = await db.query(query);
      return clientes;
    } catch (error) {
      throw new Error('Error al obtener todos los clientes.');
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

  static async create(nombreCompleto, correoElectronico, numeroTelefono) {
    const query = 'INSERT INTO Cliente (nombre_completo, correo_electronico, numero_telefono) VALUES (?, ?, ?)';
    try {
      const result = await db.query(query, [nombreCompleto, correoElectronico, numeroTelefono]);
      return result.insertId;
    } catch (error) {
      throw new Error('Error al crear un nuevo cliente.');
    }
  }
}

module.exports = Cliente;
