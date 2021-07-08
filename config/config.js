const keys = require('./keys');

module.exports = {
  "development": {
    "username": "postgres",
    "password": keys.DB_PW,
    "database": "test_db",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}