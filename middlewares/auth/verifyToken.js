const req = require("express/lib/request")
const res = require("express/lib/response")
const jwt = require("jsonwebtoken")
const { except } = require("../../data")

const SERCRET = "#FF2324"

// Token de verificação  de veracidade de Token
function authenticatioUSer(req, res, next){
 try{
    const tokenHeader = req.headers['x-access-token']
 }catch(err){
    res.status(401).json('Ocorreu um erro desconhecido: ' + err)
    next();
 }
 

 if(tokenHeader == null){
    return res.status(401).json({mensagenErro: 'Tonke não recebido'})
}
 jwt.verify(tokenHeader, SERCRET, (err, user)=>{
    if(err){
        res.status(401).json({mensagenErro: "Token invalido"})
    }
    req.id = id
    next()
 })
}

module.exports = verifyToken
