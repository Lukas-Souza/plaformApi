const { default: knex } = require('knex')
const {connection, connectionAdminDataBase} = require('../data/index.js')
const { search } = require('../routes')
const chalk = require('chalk')
const bcrypt = require('bcryptjs')

const SECRET_BCRYPT = '#F12(03LUC@$'


module.exports = {
    async searchById(req, res) {
        const { id } = req.params
        try {
            const products = await data('filmes').where({ id }).first();
            if (!products) {
                return res.status(404).json({ erro: 'Produto não encontrado' })
            }
            const conparyPassword = 
            res.json(products)
        } catch (err) {
            res.status(500).json({erro:'Não foi possivel reaçizar a buscar pelo ID'})
        }
},
    async selectAll(req, res) {
       
        try {
            const products = await data.select().from('filmes')  
            res.json(products)
        } catch (err) {
            res.status(500).json("Deu algo de errado: " + err)
            console.log(chalk.red.bold('Ocorreu um erro no serviço: ' + err))
        }
    },
    // Post
    async createItem(req, res) {
        try {
            const { title, yaerLancament, generi, directo, note } = req.params;
            const [id] = await  data('filmes').insert(title, generi, directo, yaerLancament, note)
             res.status(200).json("Postagem realizada com sucesso!!") 
        } catch (err) {
            res.status(500).json({erro: "Postagen não concluida: "+ err})
      }
    },
    //
    async authenticationUserToken(req, res) {
            try{
                const {username, password} = req.body || {}
            }catch(err){
                return res.status(401).json(mensagem: "ocorreu em erro na coleta de dado", erroMensage: err)
            }
            
            try{
                const infoUser = await connectionAdminDataBase('username').select({username}).first()
                if(!infoUser){
                    return res.status(404).json(mensagem: "usuario não encontrado")
                }
                // compare 
            }catch(err){
                return res.json(mensagem: "ocorreu um erro de busca ao banco de dados")
            }
            
            
            // // Seclect * from Where "emai@gmai,com" 
            // const infUser = knex('user').select({email}).first() 
            // if(!infUser){
            //     res.json("user does not exist")
            
        
            // const Token = jwt.sign({ id: 19 }, SECRET, { expiresIn: 300 })
            // console.log("erro")
            // return res.json({ mesagem: "Solicitação recebida com sucesso", auth: true})
        
        
 
    
    },
    async stok(req, res){
        res.json({mensagemAuth:"Acesso liberado"})
    }

}