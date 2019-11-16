/**
 * Arquivo principal da aplicação
 * 
 * Responsável por iniciar nossa API e rotear para os nossos arquivos com a lógica de negócio
 */

const express = require('express');

// Aplicação
const app = express();
const cors = require("cors");

// Aplicação
app.use(cors());

// Carregar as rotas iniciais com informações principais da API
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

// Carregar as rotas responsáveis pelos calculos a serem realizados
const calculosRoutes = require('./routes/calculos-routes');
app.use('/calculo', calculosRoutes);


app.use('*', function(req, res){
    res.status(404).send('<center><h1>Opaaa, ta achando que vai aonde?</h1></center>');
});

module.exports = app;