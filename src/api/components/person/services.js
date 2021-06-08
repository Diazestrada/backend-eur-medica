'use strict'

const error = require('../../../utils/errors');
const conenctionDB = require('../../../config/connection-db');

const personModel = require('./models/')

module.exports.createPerson = async (data) => {
  let connection = await conenctionDB();
  let PersonModel = connection.model('persons', personModel);

  return new Promise((resolve, reject) => {
    const PersonCreate = new PersonModel(data)
    PersonCreate.save((err, created) => {
      if (err) {
        console.error(err)
        return reject(err)
      } else {
        return resolve(created);
      }
    })
  })
}

module.exports.getAllPerson = async () => {
  let connection = await conenctionDB();
  let PersonModel = connection.model('persons', personModel);

  return new Promise((resolve, reject) => {
    PersonModel.find({}).exec((err, person) => {
      if (err) {
        return reject(error(`Error ${err}`, 400))
      } else {
        return resolve(person)
      }
    })

  })
}