const mongoose = require('mongoose')
const { Schema } = mongoose

const wordSchema = new Schema({
  text: String,
  mean: String
}, {
  timestamps: true
})
module.exports = mongoose.model('Word', wordSchema)