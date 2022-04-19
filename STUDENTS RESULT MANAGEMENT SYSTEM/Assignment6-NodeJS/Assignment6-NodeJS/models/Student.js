const Sequelize = require('sequelize');
require('../database/connection');

module.exports = sequelize.define("student", {
    rollNo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dob: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    score: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},
{
    tableName: "student"
});