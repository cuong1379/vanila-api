const Note = require('../../models/note')

const noteController = {
    getAll: async (req, res) => {
        const notes = await Note.find().sort({createdAt: -1})
        res.json({
            success: true,
            data: notes
        })
    },
    get: async (req, res) => {
        const note = await Note.findById(req.params.id)
        if(!note) return res.json({success: false, messsage: 'Ghi chú không tồn tại'})
        res.json({
            success:true,
            data: note
        })
    },
    create: async (req, res) => {
        const {title, content, noteTag} = req.body
        const note = await Note.create({
            title, 
            content,
            noteTag: noteTag._id
        })
        res.json({
            success:true,
            message: 'Tạo ghi chú thành công',
            data: note
        })
    },
    update: async (req, res) => {
        const {title, content} = req.body
        const note = await Note.findById(req.params.id)
        if(!note) return res.json({success: false, messsage: 'Ghi chú không tồn tại'})
        await note.updateOne({
            title, content
        })
        res.json({
            success:true,
            message: 'Cập nhật ghi chú thành công',
            data: {...note.toObject(), title, content}
        })
    },
    delete: async (req, res) => {
        const note = await Note.findById(req.params.id)
        if(!note) return res.json({success: false, messsage: 'Ghi chú không tồn tại'})
        await note.deleteOne()
        res.json({
            success:true,
            message: 'Xóa ghi chú thành công'
        })
    }


}

module.exports = noteController