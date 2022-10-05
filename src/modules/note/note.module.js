const express = require('express')
const NoteController = require('./note.controller')
const NoteTagController = require('./noteTag.controller')

const NoteModule = express.Router()

NoteModule.get('/tag/', NoteTagController.getAll)
NoteModule.post('/tag/', NoteTagController.create)
NoteModule.get('/tag/:id', NoteTagController.get)
NoteModule.put('/tag/:id', NoteTagController.update)
NoteModule.delete('/tag/:id', NoteTagController.delete)

NoteModule.get('/', NoteController.getAll)
NoteModule.post('/', NoteController.create)
NoteModule.get('/:id', NoteController.get)
NoteModule.put('/:id', NoteController.update)
NoteModule.delete('/:id', NoteController.delete)



module.exports = NoteModule