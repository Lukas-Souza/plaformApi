const { default: knex } = require('knex')
const {connection, connectionAdminDataBase} = require('../data/index.js')
const { search } = require('../routes')
const bcrypt = require('bcryptjs')
const { header } = require('express/lib/request.js')
const creatJwt = require('../middlewares/createJwt/index.js')
const { json } = require('express/lib/response.js')

module.exports = {
    async searchById(req, res) {
        const  id  = req.query
        try {
            const products = await connection('filmes').where(id).first();
            if (!products) {
                return res.status(404).json({ erro: 'Produto não encontrado' })
            }
            res.json(products)
        } catch (err) {
            res.status(500).json({erro:'Não foi possivel reaçizar a buscar pelo ID'})
        }
},
    async selectAll(req, res) {
       
        try {
            const products = await connection.select().from('filmes')  
            res.json(products)
        } catch (err) {
            res.status(500).json("Deu algo de errado: " + err)
        }
    },
    async authenticationUser(req, res, next) {
            try{
                const { username, password } = req.body       
            try{
                 const infoUser = await connectionAdminDataBase('admin').where({username}).first()
                if (!infoUser) {
                    console.log(username)
                    return res.status(404).json( "usuario não encontrado", {username})
                }
                const verifyPassword = await bcrypt.compare(password, infoUser.password)
                if (verifyPassword) {
                  return res.json("senha incorreta")
                }
                
                 res.cookie('token', JSON.stringify(await creatJwt.creatJwt(infoUser.id)), {
                    httpOnly: true, // Não acessível via JS
                    secure: false, // Só funciona em HTTPS (produção)
                    maxAge: 3600000 // 1 hora
                 });
                 return res.json("cookie croadp")
            } catch (err) {
                console.log(err)
                return res.json("ocorreu um erro" + err)
            }
            } catch (err) {   
                return res.status(401).json({ mensagem: "ocorreu um erro"});
            }
    },
    async deletItenStok(req, res) {
            const id = req.query
            try {
                const resultado = await connection('filmes').where(id).del()
                if (resultado == 0) {
                    return res.json("dn")
                }
                console.log("item deletado com sucesso")
                return res.json("item deletado com sucesso")
            } catch (err) {
                return res.json(err)
            }
    },
    async putStok(req, res) {
        const id = req.query
        const { title, yaerLancament, generi, directo, note } = req.body
        try {
            const updateSql = (await connection('filmes')).
                where(id).
                update({
                    title,
                    generi,
                    directo,
                    yaerLancament,
                    note
                })
            if (updateSql === 0) {
                res.status(404).json({mesagem: 'usuario não encontrado'})
            }
            return res.status(200).json({mensagem: 'item atualizado com sucesso'})
        } catch (err) {
            res.status(404).json("ouve um erro")
        }        
    },
    async createItem(req, res) {
        try {
            const { title, yaerLancament, generi, directo, note } = req.body || {};

            if (req.boy == {}) {
                return res.status(401).json('ocorreu um erro na requesição')
            }
                await connection('filmes').insert({
                    titulo: title,
                    genero: generi,
                    diretor: directo,
                    ano_lancamento: yaerLancament,
                    nota: note
                  });
                  
            return res.status(200).json("Postagem realizada com sucesso!!", title, generi, directo, yaerLancament, note) 
        } catch (err) {
            return res.status(500).json("Postagen não concluida: ", err)
      }
    }
}