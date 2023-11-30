const path = require('path');

function validarCorreoElectronico(correoElectronico) {
  const regexCorreoElectronico = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexCorreoElectronico.test(correoElectronico);
}

function validarNumeroTelefono(numeroTelefono) {
  const regexNumeroTelefono = /^\d{10,15}$/;
  return regexNumeroTelefono.test(numeroTelefono);
}

function validarFormatoPDF(pdfNombreArchivo) {
  const extension = path.extname(pdfNombreArchivo).toLowerCase();
  return extension === '.pdf';
}

function validarFuerzaContraseña(contraseña) {
  // Lógica para verificar la fuerza de la contraseña (por ejemplo, longitud mínima, caracteres especiales, etc.)
  const longitudMinima = 8;
  const tieneCaracterEspecial = /[-!$%^&*()_+|~=`{}\[\]:;<>?,.@#]/.test(contraseña);

  return contraseña.length >= longitudMinima && tieneCaracterEspecial;
}

module.exports = { validarCorreoElectronico, validarNumeroTelefono, validarFormatoPDF, validarFuerzaContraseña };
