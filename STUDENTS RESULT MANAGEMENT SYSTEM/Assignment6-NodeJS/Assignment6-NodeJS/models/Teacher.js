const Sequelize = require('sequelize');
require('../database/connection');

module.exports = sequelize.define("teacher", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
        
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
},
{
    tableName: "teacher"
});