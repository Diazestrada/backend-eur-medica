'use strict'

const response = require('../../../network/response')

const services = require('./services')

module.exports.createPerson = (req, res, next) => {
  const { body } = req
  services.createPerson(body).then(resData => {
    response.success(req, res, 'SUCCESS', resData)
  })
    .catch(next)
}
module.exports.getAllPerson = (req, res, next) => {

  services.getAllPerson().then(resData => {
    response.success(req, res, 'SUCCESS', resData)
  })
    .catch(next)
}