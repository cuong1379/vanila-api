const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  email: {
    type: String
  },
  password: String,
  roles: String,
}, {
  timestamps: true
})
module.exports = mongoose.model('User', userSchema)