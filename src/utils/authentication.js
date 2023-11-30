const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function generarHashContraseña(contraseña) {
  const saltRounds = 10;
  return await bcrypt.hash(contraseña, saltRounds);
}

async function compararContraseña(contraseña, hash) {
  return await bcrypt.compare(contraseña, hash);
}

function generarToken(payload) {
  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' });
}

function verificarToken(token) {
  return jwt.verify(token, process.env.SECRET_KEY);
}

module.exports = { generarHashContraseña, compararContraseña, generarToken, verificarToken };
