'use strict'

const express = require('express');

const controller = require('./controller');

const router = express.Router();

router.get('/getAllEps', controller.getAllEps)


module.exports = router