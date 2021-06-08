'use strict'

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const config = require('../../config')

const network = require('./components')

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('dev'))
app.use('/api/eps', network.networkEps)
app.use('/api/person', network.networkPerson)

app.listen(config.api.port, () => {
  console.log('server listen to port', config.api.port)
})