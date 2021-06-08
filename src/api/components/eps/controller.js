'use strict'

const response = require('../../../network/response')

const services = require('./services')

module.exports.getAllEps = (req, res, next) => {
  services.getAllEps().then(resData => {
    response.success(req, res, 'SUCCESS', resData)
  })
    .catch(next)
}