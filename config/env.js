const path = require('path');
const dotenv = require('dotenv-safe');

const NODE_ENV = process.env.NODE_ENV || 'development'; // always load development if no env are suplied
const envFile = NODE_ENV === 'test' ? '../.env.test' : '../.env';

/* istanbul ignore next */
dotenv.load({
  path: path.join(__dirname, envFile),
});

module.exports = function (key, defaultValue = null) {
  if (typeof key !== 'string') {
    throw new Error('The key must be a string!');
  }

  return process.env[key] || defaultValue;
};
