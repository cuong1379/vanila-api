const express = require('express')
const ProfileController = require('./profile.controller')

const ProfileModule = express.Router()

ProfileModule.get('/', ProfileController.get)

module.exports = ProfileModule