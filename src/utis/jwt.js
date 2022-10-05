const jwt = require('jsonwebtoken')
const {jwtSecetKey} = require('../config')

exports.generateJwtToken = (user) => jwt.sign(user, jwtSecetKey)