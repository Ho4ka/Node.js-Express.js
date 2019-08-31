const Seaquelize = require('sequelize');

const seaquelize = require('../util/database');

const Order = seaquelize.define('order', {
    id: {
        type: Seaquelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
});

module.exports = Order;