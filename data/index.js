const knex = require('knex')
const configData = require('./knexfile')
const connection = knex(configData.production)

module.exports = connection;