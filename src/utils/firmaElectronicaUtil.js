const crypto = require('crypto');

class FirmaElectronicaUtil {
  static generarFirma(datosUsuario) {
    try {
      const efirma = crypto.createHash('sha256').update(datosUsuario).digest('hex');
      return efirma;
    } catch (error) {
      throw new Error('Error al generar la firma electrónica.');
    }
  }

  static verificarFirma(datosUsuario, efirma) {
    try {
      const efirmaCalculada = this.generarFirma(datosUsuario);
      return efirma === efirmaCalculada;
    } catch (error) {
      throw new Error('Error al verificar la firma electrónica.');
    }
  }
}

module.exports = FirmaElectronicaUtil;

