const express = require('express')
const WordController = require('./word.controller')

const WordModule = express.Router()

WordModule.get('/', WordController.getAll)
WordModule.post('/', WordController.create)
WordModule.get('/:id', WordController.get)
WordModule.put('/:id', WordController.update)
WordModule.delete('/:id', WordController.delete)

module.exports = WordModule