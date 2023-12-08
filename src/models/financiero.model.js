// financiero.model.js
const db = require('../config/db');

class Financiero {
  static async create(financieroData) {
    const result = await db.query('INSERT INTO Financiero SET ?', [financieroData]);
    return result.insertId;
  }

  static async findByEmail(email) {
    const [financiero] = await db.query('SELECT * FROM Financiero WHERE email = ?', [email]);
    return financiero[0];
  }
}

module.exports = Financiero;
