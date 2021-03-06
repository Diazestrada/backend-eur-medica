'use strict'

const response = require('./response');

module.exports = (err, req, res, next) => {
  const message = err.message || 'Error interno';
  const status = err.statusCode || 500;

  response.error(req, res, message, status);
}