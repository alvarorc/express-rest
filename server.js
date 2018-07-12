const express = require('./start/express');
const routes = require('./start/routes');
const http = require('./start/http');
const Env = require('./config/env');

const app = express(Env('API_ROOT'), routes);

const port = Env('PORT');

module.exports = http(app, port);
