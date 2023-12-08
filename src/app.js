const express = require('express');
const multer = require('multer');
const path = require('path');
const db = require('./config/db');
const contratoRoutes = require('./routes/contratoRoutes');
const clienteRoutes = require('./routes/cliente.routes');
const detalleContratoRoutes = require('./routes/contratoRoutes');
const firmaRoutes = require('./routes/firma.routes');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const financieroRoutes = require('./routes/financiero.routes'); // Corregido aquí

const PORT = process.env.PORT || 3306;

// Habilitar CORS para todos los dominios
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Configurar multer para manejar la subida de archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Configurar las rutas
app.use('/api', contratoRoutes);
app.use('/api', clienteRoutes);
app.use('/api', detalleContratoRoutes);
app.use('/api', firmaRoutes);
app.use('/api', financieroRoutes); // Corregido aquí

// Ruta para subir contrato
app.post('/api/subirContrato', upload.single('contrato'), (req, res) => {
  const filePath = req.file.path;
  res.json({ message: 'Contrato subido correctamente', filePath: filePath });
});

// Ruta para servir archivos estáticos (previsualizaciones de imágenes)
app.use('/uploads', express.static(path.join(__dirname, 'src/uploads')));

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error interno del servidor');
});

// Conectar a la base de datos
db.getConnection()
  .then((connection) => {
    console.log('Conexión a la base de datos exitosa :)');
    connection.release();

    // Iniciar el servidor
    app.listen(PORT, () => {
      console.log(`Servidor en ejecución en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err);
    process.exit(1); // Terminar la aplicación si no se puede conectar a la base de datos
  });

module.exports = app;
