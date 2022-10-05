const mongoose = require('mongoose')
const { Schema } = mongoose

const noteSchema = new Schema({
  title: String,
  content: String,
  noteTag: { 
    type: Schema.Types.ObjectId, 
    ref: 'NoteTag' 
  },
}, {
  timestamps: true
})
module.exports = mongoose.model('Note', noteSchema)