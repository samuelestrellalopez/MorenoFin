const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./config/db');

// Middleware
app.use(bodyParser.json());

// Importar rutas (corregir rutas relativas)
const financierosRouter = require('./routes/financieros');
const clausulasContratoRoutes = require('./routes/clausulasContrato');
const clientesRoutes = require('./routes/clientes');
const plantillasContratoRoutes = require('./routes/plantillasContrato');
const contratosRoutes = require('./routes/contratos');

// Usar rutas
app.use(financierosRouter);
app.use(clausulasContratoRoutes);
app.use(clientesRoutes);
app.use(plantillasContratoRoutes);
app.use(contratosRoutes);

// Manejar errores 404
app.use((req, res, next) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Manejar errores internos del servidor
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Arrancar el servidor
const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
