const FirmaService = require('../services/firmaService');
const FirmaElectronicaUtil = require('../utils/firmaElectronicaUtil');

class FirmaController {
  static async getAllFirmas(req, res) {
    try {
      const firmas = await FirmaService.getAllFirmas();
      res.json(firmas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener las firmas.' });
    }
  }

  static async getFirmaById(req, res) {
    const { id } = req.params;
    try {
      const firma = await FirmaService.getFirmaById(id);
      res.json(firma);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener la firma por ID.' });
    }
  }

  static async createFirma(req, res) {
    const { keyCliente, nombreCliente, contraseñaCliente, certificado, contratoId } = req.body;
    try {
      // Concatenar los datos del usuario y generar la firma electrónica
      const datosUsuario = `${keyCliente}-${nombreCliente}-${contraseñaCliente}-${certificado}`;
      const efirma = FirmaElectronicaUtil.generarFirma(datosUsuario);

      // Almacenar la firma electrónica en la base de datos
      const nuevaFirmaId = await FirmaService.createFirma(keyCliente, nombreCliente, contraseñaCliente, efirma, certificado, contratoId);

      res.json({ id: nuevaFirmaId, mensaje: 'Firma electrónica generada y almacenada exitosamente.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al generar y almacenar la firma electrónica.' });
    }
  }
}

module.exports = FirmaController;
