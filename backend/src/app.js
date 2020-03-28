const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

// Route / Resource

/**
 * HTTP methods:
 * 
 * GET: Search information in backend
 * POST: Create information in backend
 * PUT: Change information in backend
 * DELETE: Delete information in backend
 */


/**
 * Parameter types:
 * 
 * Query Params: Named params sent in the rout after "?" (Filters, pagination)
 * Route Params: Used to identify resources
 * Request body: Request body used to create or change resources
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, MS SQL Server, etc...
 * NoSQL: MongoDB, CouchDB, Firebase, etc...
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

module.exports = app;