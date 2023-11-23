const Contrato = require('../models/Contrato');

exports.createContrato = (req, res) => {
  const { plantillaContratoId, estadoContrato, firmaCliente } = req.body;

  Contrato.create(plantillaContratoId, estadoContrato, firmaCliente, (err, result) => {
    if (err) {
      console.error('Error al insertar contrato:', err);
      return res.status(500).json({ error: err.message });
    }
    console.log('Contrato insertado correctamente');
    return res.status(201).json(result);
  });
};

exports.getContratoById = (req, res) => {
  const { id } = req.params;

  Contrato.findById(id, (err, contrato) => {
    if (err) {
      console.error('Error al obtener contrato por ID:', err);
      return res.status(500).json({ error: err.message });
    }
    if (!contrato) {
      return res.status(404).json({ error: 'Contrato no encontrado' });
    }
    return res.status(200).json(contrato);
  });
};

exports.getAllContratos = (req, res) => {
  Contrato.findAll((err, contratos) => {
    if (err) {
      console.error('Error al obtener todos los contratos:', err);
      return res.status(500).json({ error: err.message });
    }
    return res.status(200).json(contratos);
  });
};

exports.updateContrato = (req, res) => {
  const { id } = req.params;
  const newData = req.body;

  Contrato.update(id, newData, (err, result) => {
    if (err) {
      console.error('Error al actualizar contrato:', err);
      return res.status(500).json({ error: err.message });
    }
    return res.status(200).json(result);
  });
};

exports.deleteContrato = (req, res) => {
  const { id } = req.params;

  Contrato.delete(id, (err) => {
    if (err) {
      console.error('Error al eliminar contrato:', err);
      return res.status(500).json({ error: err.message });
    }
    return res.status(204).json();
  });
};
