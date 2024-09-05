const express = require('express');
const app = express();

// Definir rotas e middleware
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
