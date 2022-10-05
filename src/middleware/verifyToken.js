const jwt = require("jsonwebtoken");

const authenticate = (request, response, next) => {
  let token = request.headers.authorization;
  if (!token)
    return response.json({
      success: false,
      message: "Thiếu token",
    });
  token = token.replace("Bearer ", "");
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (verified) return next();
  } catch (err) {
    return response.json({
      success: false,
      message: "Xác thực thất bại",
    });
  }
};

module.exports = authenticate;
