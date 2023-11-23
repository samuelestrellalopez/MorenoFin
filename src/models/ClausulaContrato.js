const db = require('../config/db');

const ClausulaContrato = {
  create: (objetoContrato, obligacionesPartes, derechosPartes, rescisionContrato, callback) => {
    const sql = 'INSERT INTO clausulas_contrato (objetoContrato, obligacionesPartes, derechosPartes, rescisionContrato) VALUES (?, ?, ?, ?)';
    const values = [objetoContrato, obligacionesPartes, derechosPartes, rescisionContrato];

    db.query(sql, values, (err, result) => {
      if (err) {
        return callback(err, null);
      }

      const nuevaClausulaContrato = {
        id: result.insertId,
        objetoContrato,
        obligacionesPartes,
        derechosPartes,
        rescisionContrato
      };

      const response = {
        message: 'Clausula de contrato creada correctamente',
        data: nuevaClausulaContrato
      };

      callback(null, response);
    });
  },

  findById: (id, callback) => {
    const sql = 'SELECT * FROM clausulas_contrato WHERE id = ?';
    db.query(sql, [id], callback);
  },

  findAll: (callback) => {
    const sql = 'SELECT * FROM clausulas_contrato';
    db.query(sql, callback);
  },

  update: (id, data, callback) => {
    const sql = 'UPDATE clausulas_contrato SET ? WHERE id = ?';
    db.query(sql, [data, id], callback);
  },

  delete: (id, callback) => {
    const sql = 'DELETE FROM clausulas_contrato WHERE id = ?';
    db.query(sql, [id], callback);
  },
};

module.exports = ClausulaContrato;
