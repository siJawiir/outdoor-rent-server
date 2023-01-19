const jwt = require('jsonwebtoken')
const secretCode = +process.env.SECRET_CODE || 'secret-code'

const tokenGenerator = (data) => {
    const {id,username,email,image,phone} = data
    return jwt.sign({
        id,
        username,
        email,
        image,
        phone
    },secretCode)
}

const tokenVerifier = (data) => {
    return jwt.verify(data,secretCode)
}

module.exports = {
    tokenGenerator,
    tokenVerifier
}