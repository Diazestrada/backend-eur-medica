'use strict'

const error = require('../../../utils/errors');
const conenctionDB = require('../../../config/connection-db');

const epsModel = require('./models/')

module.exports.getAllEps = async () => {
  let connection = await conenctionDB();
  let EpsModel = connection.model('eps', epsModel);

  return new Promise((resolve, reject) => {
    EpsModel.find({}).exec((err, eps) => {
      if (err) {
        return reject(error(`Error ${err}`, 400))
      } else {
        return resolve(eps)
      }
    })

  })
}