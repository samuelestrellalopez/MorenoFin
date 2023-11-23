const Financiero = require('../models/financiero'); // Corregir el nombre aquí


// CREATE
exports.createFinanciero = (req, res) => {
  const { nombre, NIF, direccion, telefono, correoElectronico } = req.body;

  Financiero.create(nombre, NIF, direccion, telefono, correoElectronico, (err, result) => {
    if (err) {
      console.error('Error al insertar financiero:', err);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    console.log('Financiero insertado correctamente');
    return res.status(201).json({ message: 'Financiero creado correctamente', data: result });
  });
};

// READ (getAll)
exports.getAllFinancieros = (req, res) => {
  Financiero.findAll((err, financieros) => {
    if (err) {
      console.error('Error al obtener todos los financieros:', err);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    if (financieros.length === 0) {
      return res.status(404).json({ message: 'Ningún financiero encontrado' });
    }
    return res.status(200).json({ message: 'Lista de financieros obtenida correctamente', data: financieros });
  });
};

// READ (getById)
exports.getFinancieroById = (req, res) => {
  const { id } = req.params;

  Financiero.findById(id, (err, financiero) => {
    if (err) {
      console.error('Error al obtener financiero por ID:', err);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    if (!financiero) {
      return res.status(404).json({ message: 'Financiero no encontrado' });
    }
    return res.status(200).json({ message: 'Financiero obtenido por ID correctamente', data: financiero });
  });
};

// UPDATE
exports.updateFinanciero = (req, res) => {
  const { id } = req.params;
  const newData = req.body;

  Financiero.update(id, newData, (err, result) => {
    if (err) {
      console.error('Error al actualizar financiero:', err);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Financiero no encontrado' });
    }
    return res.status(200).json({ message: 'Financiero actualizado correctamente', data: result });
  });
};

// DELETE
exports.deleteFinanciero = (req, res) => {
  const { id } = req.params;

  Financiero.delete(id, (err, result) => {
    if (err) {
      console.error('Error al eliminar financiero:', err);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Financiero no encontrado' });
    }
    return res.status(200).json({ message: 'Financiero eliminado correctamente', data: result });
  });
};
