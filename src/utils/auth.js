const jwt = require('jsonwebtoken');

const secretKey = 'tu_secreto_seguro'; // Cambia esto por una cadena segura

function generarToken(usuarioId) {
  return jwt.sign({ usuarioId }, secretKey, { expiresIn: '1h' }); // Expira en 1 hora, ajusta según tus necesidades
}

function verificarToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  jwt.verify(token, secretKey, (error, decoded) => {
    if (error) {
      return res.status(401).json({ error: 'Token inválido' });
    }

    req.usuarioId = decoded.usuarioId;
    next();
  });
}

module.exports = { generarToken, verificarToken };
