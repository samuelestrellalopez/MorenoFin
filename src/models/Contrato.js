const db = require('../config/db');

const Contrato = {
  create: (plantillaContratoId, estadoContrato, firmaCliente, callback) => {
    const sql = 'INSERT INTO contratos (plantillaContratoId, estadoContrato, firmaCliente) VALUES (?, ?, ?)';
    const values = [plantillaContratoId, estadoContrato, firmaCliente];

    db.query(sql, values, (err, result) => {
      if (err) {
        return callback(err, null);
      }

      const nuevoContrato = {
        id: result.insertId,
        plantillaContratoId,
        estadoContrato,
        firmaCliente
      };

      const response = {
        message: 'Contrato creado correctamente',
        data: nuevoContrato
      };

      callback(null, response);
    });
  },

  findById: (id, callback) => {
    const sql = 'SELECT * FROM contratos WHERE id = ?';
    db.query(sql, [id], callback);
  },

  findAll: (callback) => {
    const sql = 'SELECT * FROM contratos';
    db.query(sql, callback);
  },

  update: (id, data, callback) => {
    const sql = 'UPDATE contratos SET ? WHERE id = ?';
    db.query(sql, [data, id], callback);
  },

  delete: (id, callback) => {
    const sql = 'DELETE FROM contratos WHERE id = ?';
    db.query(sql, [id], callback);
  },
};

module.exports = Contrato;
