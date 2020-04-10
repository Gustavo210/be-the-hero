const express = require('express');
const cors = require('cors');
const { errors} = require('celebrate');
const routes = require('./routes');
const app = express();


app.use(cors());
app.use(express.json());
/**
 * rota / recurso
 */
/**
 * Metodos HTTP
 * 
 * GET:  buscar uma informação no back-end
 * POST: criar uma informação no back-end
 * PUT: alterar uma informação no back-end
 * DELETE: deletar uma informação no back-end
 */
/**
 * Tipos de parametro:
 * 
 * Query params: parametros nomeados enviados na rota apos "?" (filtros, paginação)
 * route params: parametros utilizados para identificar recursos
 * Request Bory: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * sql: mysql, sqlite, postgresql, oracle, microsoft sql server
 * nosql: mongodb, couchdb, etc
 */

 /**
  * drive: select * from users
  * query builder:
  */

app.use(routes);
app.use(errors());

module.exports = app;