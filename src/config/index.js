
module.exports = {
  development: {
    serviceTimeout: 30,
    postgres: {
        options: {
            host: process.env.DB_HOST,
            port: process.env.PORT,
            database: process.env.DB_NAME,
            dialect: 'postgres',
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        },
        client: null
    }
  }
};