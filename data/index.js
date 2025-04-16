const knex = require('knex')
const configData = require('./knexfile')
const connection = knex(configData.production)
const connectionAdminDataBase = knex(configData.systemAdminDb)

module.exports = {connection, connectionAdminDataBase};