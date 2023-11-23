const db = require('../config/db');

const PlantillaContrato = {
  create: (financierosId, clausulaContratoId, clienteId, formatoPDF, estadoContrato, firmaCliente, callback) => {
    const sql = 'INSERT INTO plantillas_contrato (financierosId, clausulaContratoId, clienteId, formatoPDF, estadoContrato, firmaCliente) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [financierosId, clausulaContratoId, clienteId, formatoPDF, estadoContrato, firmaCliente];

    db.query(sql, values, (err, result) => {
      if (err) {
        return callback(err, null);
      }

      const nuevaPlantillaContrato = {
        id: result.insertId,
        financierosId,
        clausulaContratoId,
        clienteId,
        formatoPDF,
        estadoContrato,
        firmaCliente
      };

      const response = {
        message: 'Plantilla de contrato creada correctamente',
        data: nuevaPlantillaContrato
      };

      callback(null, response);
    });
  },

  findById: (id, callback) => {
    const sql = 'SELECT * FROM plantillas_contrato WHERE id = ?';
    db.query(sql, [id], (err, results) => {
      if (err) {
        return callback(err, null);
      }

      if (results.length === 0) {
        const response = {
          message: 'Plantilla de contrato no encontrada',
          data: null
        };
        return callback(null, response);
      }

      const plantillaContrato = results[0];
      const response = {
        message: 'Plantilla de contrato encontrada',
        data: plantillaContrato
      };
      callback(null, response);
    });
  },

  findAll: (callback) => {
    const sql = 'SELECT * FROM plantillas_contrato';
    db.query(sql, (err, results) => {
      if (err) {
        return callback(err, null);
      }

      const response = {
        message: results.length > 0 ? 'Lista de plantillas de contrato' : 'Ninguna plantilla de contrato encontrada',
        data: results
      };

      callback(null, response);
    });
  },

  update: (id, data, callback) => {
    const sql = 'UPDATE plantillas_contrato SET ? WHERE id = ?';
    db.query(sql, [data, id], (err, result) => {
      if (err) {
        return callback(err, null);
      }

      const response = {
        message: 'Plantilla de contrato actualizada correctamente',
        data: {
          id,
          ...data
        }
      };

      callback(null, response);
    });
  },

  delete: (id, callback) => {
    const sql = 'DELETE FROM plantillas_contrato WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) {
        return callback(err, null);
      }

      if (result.affectedRows === 0) {
        const response = {
          message: 'Plantilla de contrato no encontrada',
          data: null
        };
        return callback(null, response);
      }

      const response = {
        message: 'Plantilla de contrato eliminada correctamente',
        data: {
          id
        }
      };

      callback(null, response);
    });
  },
};

module.exports = PlantillaContrato;
