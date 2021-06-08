'use strict'

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const EpsSchema = new mongoose.Schema({
  codigo: { type: String },
  entidad: { type: String },
  nit: { type: String },
  regimen_codigo: { type: String },
  regimen_descripcion: { type: String }
})

EpsSchema.plugin(mongoosePaginate);

module.exports = EpsSchema

