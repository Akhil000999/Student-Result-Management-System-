'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("teacher", {
      id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },
      username: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
              isAlpha: true
          }
      },
      password: {
          type: Sequelize.STRING,
          allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("teacher");
  }
};
