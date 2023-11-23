const Cliente = require('../models/Cliente');

// Crear Cliente
exports.createCliente = (req, res) => {
  const { nombre, NIF, direccion, telefono, correoElectronico } = req.body;

  Cliente.create(nombre, NIF, direccion, telefono, correoElectronico, (err, result) => {
    if (err) {
      console.error('Error al insertar cliente:', err);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    console.log('Cliente insertado correctamente');
    return res.status(201).json({ message: 'Cliente creado correctamente', data: result });
  });
};

// Obtener Cliente por ID
exports.getClienteById = (req, res) => {
  const { id } = req.params;

  Cliente.findById(id, (err, cliente) => {
    if (err) {
      console.error('Error al obtener cliente por ID:', err);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }
    return res.status(200).json({ message: 'Cliente obtenido correctamente', data: cliente });
  });
};

// Obtener todos los Clientes
exports.getAllClientes = (req, res) => {
  Cliente.findAll((err, clientes) => {
    if (err) {
      console.error('Error al obtener todos los clientes:', err);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    if (clientes.length === 0) {
      return res.status(200).json({ message: 'Ningún cliente encontrado', data: [] });
    }
    return res.status(200).json({ message: 'Todos los clientes obtenidos correctamente', data: clientes });
  });
};

// Actualizar Cliente
exports.updateCliente = (req, res) => {
  const { id } = req.params;
  const newData = req.body;

  Cliente.update(id, newData, (err, result) => {
    if (err) {
      console.error('Error al actualizar cliente:', err);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }
    return res.status(200).json({ message: 'Cliente actualizado correctamente', data: result });
  });
};

// Eliminar Cliente
exports.deleteCliente = (req, res) => {
  const { id } = req.params;

  Cliente.delete(id, (err, result) => {
    if (err) {
      console.error('Error al eliminar cliente:', err);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }
    return res.status(200).json({ message: 'Cliente eliminado correctamente', data: result });
  });
};
