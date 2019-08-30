const Seaquelize = require('sequelize');

const seaquelize = require('../util/database');

const Cart = seaquelize.define('cart', {
  id: {
    type: Seaquelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
});

module.exports = Cart;