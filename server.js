const http = require('http');
const express = require('./start/express');
const routes = require('./start/routes');
const { host, port, env, apiRoot } = require('./config/env');
const Logger = require('./config/logger');

const app = express(apiRoot, routes);
const server = http.createServer(app);

setImmediate(() => {
  server.listen(port, host, () => {
    Logger.info('Express server listening on http://%s:%d, in %s mode', host, port, env);
  });
});
