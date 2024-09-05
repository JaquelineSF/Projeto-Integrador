const express = require('express');
const { Pool } = require('pg');
const app = express();
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

app.use(express.json());

// Exemplo de rota para testar a conexão ao banco de dados
//configurará o servidor Express e conectará ao banco de dados PostgreSQL.
app.get('/api/pets', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM pets');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
