const Seaquelize = require('sequelize');

const seaquelize = require('../util/database');

const CartItem = seaquelize.define('cartItem', {
    id: {
        type: Seaquelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quantity: Seaquelize.INTEGER
});

module.exports = CartItem;