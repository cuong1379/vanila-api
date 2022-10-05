const mongoose = require('mongoose')
const { Schema } = mongoose

const noteTagSchema = new Schema({
  name: String
}, {
  timestamps: true
})
module.exports = mongoose.model('NoteTag', noteTagSchema)

noteTagSchema.virtual('notes', {
    ref: 'Note',
    localField: '_id',
    foreignField: 'noteTag',
    justOne: false
  })