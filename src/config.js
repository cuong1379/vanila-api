exports.port = process.env.PORT || 5000
exports.mongo = {
    uri: `mongodb+srv://cuong:12345@cluster0.pcdpsj2.mongodb.net/?retryWrites=true&w=majority`,
    options: {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
    }
}
exports.jwtSecetKey = process.env.JWT_SECRET_KEY || 'cuong12345'