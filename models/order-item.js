const Seaquelize = require('sequelize');

const seaquelize = require('../util/database');

const OrderItem = seaquelize.define('orderItem', {
    id: {
        type: Seaquelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quantity: Seaquelize.INTEGER
});

module.exports = OrderItem;