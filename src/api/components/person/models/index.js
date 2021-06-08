'use strict'

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const PersomSchema = new mongoose.Schema({
  schema_version: { type: String, default: "1" },
  document_version: { type: String, default: "1" },
  codigo_interno: { type: String, unique: true },
  primer_nombre: { type: String },
  segundo_nombre: { type: String },
  primer_apellido: { type: String },
  segundo_apellido: { type: String },
  identificacion: {
    numero: { type: String, unique: true },
    fecha_expedicion: { type: String },
    lugar_expedicion: { type: String },
    tipo: { type: String }
  },
  estado_civil: { type: String },
  sexo: { type: String },
  correo_electronico: [{
    correo: { type: String }
  }],
  core_eps: [{
    idEps: { type: mongoose.Types.ObjectId, ref: 'eps' },
    fecha_ingresa: { type: String },
    estado_afiacion: { type: String }
  }

  ]
}, { timestamps: { fecha_creacion: 'fecha_creacion', fecha_ultima_modificacion: 'fecha_ultima_modificacion' } })

PersomSchema.plugin(uniqueValidator);

module.exports = PersomSchema

