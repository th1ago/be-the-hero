// import
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / recursos 
 */

 /**
 * npm instalar um pacote
 * npx executar um pacote
 */

/**
 * Tipos de parametros :
 * Query : param nomeados enviados na rota apos ? (filtros, paginacao)
 * Route : param utilizados para identificar recursos
 * Request body : corpo da requisicao 
 */

app.listen(3333);
