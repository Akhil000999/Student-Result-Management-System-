const Sequelize = require('sequelize');

const sequelize = new Sequelize("temp", "root", "root", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = sequelize;
global.sequelize = sequelize;