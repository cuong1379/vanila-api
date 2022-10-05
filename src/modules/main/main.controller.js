const User = require('../../models/user')
const { hash, compare } = require('../../utis/hash')
const { generateJwtToken } = require('../../utis/jwt')

const MainController = {
  healthz: async (req, res) => {
    res.json({ success: true, message: 'Say yeah' })
  },

  register: async (req, res) => {
    const {email, password} = req.body

    const emailExist = await User.findOne({ email: email })
    if(emailExist) return res.json({ success: false, message: 'Email đã tồn tại.' })

    await User.create({
      email,
      password: hash(password),
    })
    res.json({ success: true, message: 'Đăng ký thành công' })
  },

  login: async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})
    if(!user) return res.json({ success: false, message: 'Tài khoản không tồn tại' })

    if(!compare(password, user.password)) return res.json({ success: false, message: 'Sai mật khẩu' })

    const userData = {
        _id: user._id,
        email: user.email
      }

    res.json({
        success: true,
        message: 'Đăng nhập thành công',
        data: {
            user: userData,
            token: generateJwtToken(userData)
        }
    })
  },

}

module.exports = MainController