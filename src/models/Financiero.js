const db = require('../config/db');

const Financiero = {
  create: (nombre, NIF, direccion, telefono, correoElectronico, callback) => {
    const sql = 'INSERT INTO financieros (nombre, NIF, direccion, telefono, correoElectronico) VALUES (?, ?, ?, ?, ?)';
    const values = [nombre, NIF, direccion, telefono, correoElectronico];

    db.query(sql, values, (err, result) => {
      if (err) {
        return callback(err, null);
      }

      const nuevoFinanciero = {
        id: result.insertId,
        nombre,
        NIF,
        direccion,
        telefono,
        correoElectronico
      };

      callback(null, nuevoFinanciero);
    });
  },

  findById: (id, callback) => {
    const sql = 'SELECT * FROM financieros WHERE id = ?';
    db.query(sql, [id], (err, results) => {
      if (err) {
        return callback(err, null);
      }

      if (results.length === 0) {
        return callback(null, null); // No se encontraron resultados
      }

      const financiero = results[0];
      callback(null, financiero);
    });
  },

  findAll: (callback) => {
    const sql = 'SELECT * FROM financieros';
    db.query(sql, (err, results) => {
      if (err) {
        return callback(err, null);
      }

      callback(null, results);
    });
  },

  update: (id, data, callback) => {
    const sql = 'UPDATE financieros SET ? WHERE id = ?';
    db.query(sql, [data, id], (err, result) => {
      if (err) {
        return callback(err, null);
      }

      callback(null, result);
    });
  },

  delete: (id, callback) => {
    const sql = 'DELETE FROM financieros WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) {
        return callback(err, null);
      }

      callback(null, result);
    });
  },
};

module.exports = Financiero;
