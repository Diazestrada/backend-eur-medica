'use strict'

const mongoose = require('mongoose');
const config = require('../../config')

let dbCache = null

module.exports = async () => {

  if (dbCache === null) {
    return dbCache = await mongoose.connect(config.mongoAtlas.connectUri, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true
    })
  } else {
    return dbCache
  }

}