const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '763315Maks', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
