const req = require("express/lib/request")
const res = require("express/lib/response")
const jwt = require("jsonwebtoken")
const { except } = require("../../data")


// Token de verificação  de veracidade de Token
function authenticatioUSer(req, res, next) {
    try {
        
    const tokenHeader =  req.headers['authorization'];
    if(tokenHeader == null){
        return res.status(401).json({mensagenErro: 'Tonke não recebido'})
    }
    jwt.verify(tokenHeader, process.env.JWT_SECRET_KEY, (err, user)=>{
    if(err){
        return res.status(401).json({mensagenErro: "Token invalido", err})
        }
 })
    } catch (err) {
        console.log(err)
    }
}

module.exports = authenticatioUSer
