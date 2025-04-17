// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  systemAdminDb: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      port: 3307,
      database: 'system_admin',
      user: 'root',
      password: 'root012'
    }
  },
  production: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      port: '3307',
      database: 'products',
      user:     'root',
      password: 'root012'
    }
  }

};
