const pool= require('../db');
const bcrypt = require('bcryptjs');

class Policial {

    static async create(data) {
        const { rg_civil, rg_militar, cpf, data_nascimento, matricula } = data;
        const matriculaHash = await bcrypt.hash(matricula, 10);
        const [result] = await pool.query(
            'INSERT INTO policiais (rg_civil, rg_militar, cpf, data_nascimento, matricula) VALUES (?, ?, ?, ?, ?)',
            [rg_civil, rg_militar, cpf, data_nascimento, matriculaHash]
        );
        return result.insertId;
    }

    static async findAll() {
        const [rows] = await pool.execute('SELECT id, rg_civil, rg_militar, cpf, data_nascimento, matricula FROM policiais');
        return rows;
    }
}

module.exports = Policial;