const Word = require('../../../models/word')

const WordController = {
    getAll: async (req, res) => {
        const words = await Word.find().sort({createdAt: -1})
        res.json({
            success: true,
            data: words
        })
    },
    get: async (req, res) => {
        const word = await Word.findById(req.params.id)
        if(!word) return res.json({success: false, messsage: 'Từ mới không tồn tại'})
        res.json({
            success:true,
            data: word
        })
    },
    create: async (req, res) => {
        const {text, mean} = req.body
        await Word.create({
            text,
            mean
        })
        res.json({
            success:true,
            message: 'Tạo từ mới thành công'
        })
    },
    update: async (req, res) => {
        const {text, mean} = req.body
        const word = await Word.findById(req.params.id)
        if(!word) return res.json({success: false, messsage: 'Từ mới không tồn tại'})
        await word.updateOne({
            text,
            mean
        })
        res.json({
            success:true,
            message: 'Cập nhật từ mới thành công'
        })
    },
    delete: async (req, res) => {
        const word = await Word.findById(req.params.id)
        if(!word) return res.json({success: false, messsage: 'Từ mới không tồn tại'})
        await word.deleteOne()
        res.json({
            success:true,
            message: 'Xóa từ mới thành công'
        })
    }


}

module.exports = WordController