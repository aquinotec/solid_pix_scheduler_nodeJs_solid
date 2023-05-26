const express = require('express');
const app = express();
const routes = require('./config/routes');
const path = require('path');

// Configurações adicionais do servidor, middlewares, etc.

// Configuração do mecanismo de visualização
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Middleware para analisar dados do formulário
app.use(express.urlencoded({ extended: true }));

// Configuração das rotas
app.use('/', routes);

// Inicialização do servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
