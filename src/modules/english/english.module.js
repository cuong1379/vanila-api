const express = require('express')
const WordModule = require('./word/word.module')

const EnglishModule = express.Router()

EnglishModule.use('/word', WordModule)

module.exports = EnglishModule