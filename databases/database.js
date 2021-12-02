const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', '@Be325832', 
  {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = connection;