const db = require('../config/db');

const Cliente = {
  create: (nombre, NIF, direccion, telefono, correoElectronico, callback) => {
    const sql = 'INSERT INTO clientes (nombre, NIF, direccion, telefono, correoElectronico) VALUES (?, ?, ?, ?, ?)';
    const values = [nombre, NIF, direccion, telefono, correoElectronico];

    db.query(sql, values, (err, result) => {
      if (err) {
        return callback(err, null);
      }

      const nuevoCliente = {
        id: result.insertId,
        nombre,
        NIF,
        direccion,
        telefono,
        correoElectronico
      };

      const response = {
        message: 'Cliente creado correctamente',
        data: nuevoCliente
      };

      callback(null, response);
    });
  },

  findById: (id, callback) => {
    const sql = 'SELECT * FROM clientes WHERE id = ?';
    db.query(sql, [id], callback);
  },

  findAll: (callback) => {
    const sql = 'SELECT * FROM clientes';
    db.query(sql, callback);
  },

  update: (id, data, callback) => {
    const sql = 'UPDATE clientes SET ? WHERE id = ?';
    db.query(sql, [data, id], callback);
  },

  delete: (id, callback) => {
    const sql = 'DELETE FROM clientes WHERE id = ?';
    db.query(sql, [id], callback);
  },
};

module.exports = Cliente;
