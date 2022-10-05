const bcrypt = require('bcrypt');

exports.hash = (password) => bcrypt.hashSync(password, 10);

exports.compare = (plaintext, encrypted) => bcrypt.compareSync(plaintext, encrypted)