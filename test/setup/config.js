const request = require('supertest');
const app = require('../../server');

global.api = request(app);
