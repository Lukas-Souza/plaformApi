const jwt = require('jsonwebtoken')
module.exports = {
    async creatJwt(next, idUser) {
        try {
            const Token = await jwt.sign({ idUser }, process.env.JWT_SECRET_KEY, { expiresIn: 30000000000})
            return {auth: true, Token }
                
        } catch (err) {
            return console.log(err)
        }

    }
}