const data = require('../data/index')
const { search } = require('../routes')

module.exports = {
    async searchById(req, res) {
        const { id } = req.params
        
        try {
            const products = await data('filmes').where({ id }).first();
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
            const products = await data.select().from('filmes')  
            res.json(products)
        } catch (err) {
            res.status(500).json("Deu algo de errado: " + err)
        }
    },
    async createItem(req, res) {
        try {
            const { title, yaerLancament, generi, directo, note } = req.params;
            const [id] = await  data('filmes').insert(title, generi, directo, yaerLancament, note)
             res.status(200).json("Postagem realizada com sucesso!!") 
        } catch (err) {
            res.status(500).json({erro: "Postagen não concluida: "+ err})
      }
    }
}