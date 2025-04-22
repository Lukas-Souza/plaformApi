// Update with your config settings.
require('dotenv').config()
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  systemAdminDb: {
    client: 'mysql2',
    connection: {
      host: process.env.URL_HOST_ADMIN,
      port: process.env.PORT_ADMIN,
      database: process.env.DATABASE_ADMIN,
      user: process.env.USER_DATABASE_ADMIN,
      password: process.env.PASSWORD_ADMIN
    }
  },
  production: {
    client: 'mysql2',
    connection: {
      host: process.env.URL_HOST_CATALOGO,
      port: process.env.PORT_CATALOGO,
      database: process.env.DATABASE_CATALOGO,
      user:   process.env.USER_DATABASE_CATALOGO,
      password: process.env.PASSWORD_CATALOGO
    }
  }

};
