const express = require('express')
const MainController = require('./main.controller')
const MainModule = express.Router()

MainModule.get('/', MainController.healthz)
MainModule.post('/register', MainController.register)
MainModule.post('/login', MainController.login)

module.exports = MainModule