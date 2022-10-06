const jwt = require("jsonwebtoken");
const User = require('../../models/user')

const userController = {
    get: async (request, response) => {
        let token = request.headers.authorization;
        token = token.replace("Bearer ", "");
        const verified = jwt.verify(token, process.env.JWT_SECRET_KEY || 'cuong12345');
        const email = verified?.email
        const user = await User.findOne({email})

        response.json({
            success: true,
            data: user
        })
    },
}

module.exports = userController