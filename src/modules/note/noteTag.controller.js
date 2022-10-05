const NoteTag = require('../../models/noteTag')

const NoteTagController = {
    getAll: async (req, res) => {
        const noteTags = await NoteTag.find()
        res.json({
            success: true,
            data: noteTags
        })
    },
    get: async (req, res) => {
        const noteTag = await NoteTag.findById(req.params.id).populate('notes')
        if(!noteTag) return res.json({success: false, messsage: 'Thẻ ghi chú không tồn tại'})
        res.json({
            success:true,
            data: noteTag
        })
    },
    create: async (req, res) => {
        const {name} = req.body
        const noteTag = await NoteTag.create({
            name
        })
        res.json({
            success:true,
            message: 'Tạo thẻ ghi chú thành công',
            data: noteTag
        })
    },
    update: async (req, res) => {
        const {name} = req.body
        const noteTag = await NoteTag.findById(req.params.id)
        if(!noteTag) return res.json({success: false, messsage: 'Thẻ ghi chú không tồn tại'})
        await noteTag.updateOne({
            name
        })
        res.json({
            success:true,
            message: 'Cập nhật thẻ ghi chú thành công',
            data: {...noteTag.toObject(), name}
        })
    },
    delete: async (req, res) => {
        const noteTag = await NoteTag.findById(req.params.id)
        if(!noteTag) return res.json({success: false, messsage: 'Thẻ ghi chú không tồn tại'})
        await noteTag.deleteOne()
        res.json({
            success:true,
            message: 'Xóa thẻ ghi chú thành công'
        })
    }


}

module.exports = NoteTagController