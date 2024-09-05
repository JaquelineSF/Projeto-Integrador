const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
    user: 'seu_usuario',
    host: 'localhost',
    database: 'seu_banco_de_dados',
    password: 'sua_senha',
    port: 5432,
});

// Configuração do CORS
app.use(cors());

// Middleware para parsing de JSON
app.use(express.json());

// Exemplo de rota para testar a conexão com o banco de dados
app.get('/data', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro ao consultar o banco de dados');
    }
});

// Outras rotas e middlewares podem ser adicionados aqui

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
