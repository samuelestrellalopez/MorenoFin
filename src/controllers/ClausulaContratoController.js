const ClausulaContrato = require('../models/ClausulaContrato');


exports.createClausulaContrato = (req, res) => {
  const { objetoContrato, obligacionesPartes, derechosPartes, rescisionContrato } = req.body;

  ClausulaContrato.create(objetoContrato, obligacionesPartes, derechosPartes, rescisionContrato, (err, result) => {
    if (err) {
      console.error('Error al insertar cláusula de contrato:', err);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    console.log('Cláusula de contrato insertada correctamente');
    return res.status(201).json({ message: 'Cláusula de contrato creada correctamente', data: result });
  });
};

exports.getClausulaContratoById = (req, res) => {
  const { id } = req.params;

  ClausulaContrato.findById(id, (err, clausulaContrato) => {
    if (err) {
      console.error('Error al obtener cláusula de contrato por ID:', err);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    if (!clausulaContrato) {
      return res.status(404).json({ error: 'Cláusula de contrato no encontrada' });
    }
    return res.status(200).json({ message: 'Cláusula de contrato obtenida correctamente', data: clausulaContrato });
  });
};

exports.getAllClausulasContrato = (req, res) => {
  ClausulaContrato.findAll((err, clausulasContrato) => {
    if (err) {
      console.error('Error al obtener todas las cláusulas de contrato:', err);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    if (clausulasContrato.length === 0) {
      return res.status(200).json({ message: 'Ninguna cláusula de contrato encontrada', data: [] });
    }
    return res.status(200).json({ message: 'Todas las cláusulas de contrato obtenidas correctamente', data: clausulasContrato });
  });
};

exports.updateClausulaContrato = (req, res) => {
  const { id } = req.params;
  const newData = req.body;

  ClausulaContrato.update(id, newData, (err, result) => {
    if (err) {
      console.error('Error al actualizar cláusula de contrato:', err);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Cláusula de contrato no encontrada' });
    }
    return res.status(200).json({ message: 'Cláusula de contrato actualizada correctamente', data: result });
  });
};

exports.deleteClausulaContrato = (req, res) => {
  const { id } = req.params;

  ClausulaContrato.delete(id, (err, result) => {
    if (err) {
      console.error('Error al eliminar cláusula de contrato:', err);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Cláusula de contrato no encontrada' });
    }
    return res.status(200).json({ message: 'Cláusula de contrato eliminada correctamente', data: result });
  });
};
