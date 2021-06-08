'use strict'

module.exports.success = (req, res, message = '', data = [], status = 200) => {
  res.status(status).send({
    error: false,
    status: status,
    message,
    data

  });
}

module.exports.error = (req, res, data = [], message = 'Internal server error', status = 500) => {
  res.status(statusCode).send({
    error: true,
    status: status,
    message,
    data
  });
}