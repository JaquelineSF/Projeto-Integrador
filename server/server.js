const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.get('/', (req, res) => {
    res.send('Back-end funcionando!');
});

// Defina outras rotas aqui

// Porta
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

import React, { useEffect, useState } from 'react';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/')
            .then((response) => response.text())
            .then((data) => setMessage(data));
    }, []);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

export default App;