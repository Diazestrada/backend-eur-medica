'use strict'

const express = require('express');

const controller = require('./controller');

const router = express.Router();

router.post('/create', controller.createPerson)
router.get('/getAllPerson', controller.getAllPerson)

module.exports = router