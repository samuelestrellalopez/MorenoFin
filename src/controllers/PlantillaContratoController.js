const PlantillaContrato = require('../models/PlantillaContrato');


// CREATE
exports.createPlantillaContrato = (req, res) => {
  const { financierosId, clausulaContratoId, clienteId, formatoPDF, estadoContrato, firmaCliente } = req.body;

  PlantillaContrato.create(financierosId, clausulaContratoId, clienteId, formatoPDF, estadoContrato, firmaCliente, (err, result) => {
    if (err) {
      console.error('Error al insertar plantilla de contrato:', err);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    console.log('Plantilla de contrato insertada correctamente');
    return res.status(201).json({ message: 'Plantilla de contrato creada correctamente', data: result });
  });
};

// READ (getAll)
exports.getAllPlantillasContrato = (req, res) => {
  PlantillaContrato.findAll((err, plantillasContrato) => {
    if (err) {
      console.error('Error al obtener todas las plantillas de contrato:', err);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    if (plantillasContrato.length === 0) {
      return res.status(404).json({ message: 'Ninguna plantilla de contrato encontrada' });
    }
    return res.status(200).json({ message: 'Lista de plantillas de contrato obtenida correctamente', data: plantillasContrato });
  });
};

// READ (getById)
exports.getPlantillaContratoById = (req, res) => {
  const { id } = req.params;

  PlantillaContrato.findById(id, (err, plantillaContrato) => {
    if (err) {
      console.error('Error al obtener plantilla de contrato por ID:', err);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    if (!plantillaContrato) {
      return res.status(404).json({ message: 'Plantilla de contrato no encontrada' });
    }
    return res.status(200).json({ message: 'Plantilla de contrato obtenida por ID correctamente', data: plantillaContrato });
  });
};

// UPDATE
exports.updatePlantillaContrato = (req, res) => {
  const { id } = req.params;
  const newData = req.body;

  PlantillaContrato.update(id, newData, (err, result) => {
    if (err) {
      console.error('Error al actualizar plantilla de contrato:', err);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Plantilla de contrato no encontrada' });
    }
    return res.status(200).json({ message: 'Plantilla de contrato actualizada correctamente', data: result });
  });
};

// DELETE
exports.deletePlantillaContrato = (req, res) => {
  const { id } = req.params;

  PlantillaContrato.delete(id, (err, result) => {
    if (err) {
      console.error('Error al eliminar plantilla de contrato:', err);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Plantilla de contrato no encontrada' });
    }
    return res.status(200).json({ message: 'Plantilla de contrato eliminada correctamente', data: result });
  });
};
