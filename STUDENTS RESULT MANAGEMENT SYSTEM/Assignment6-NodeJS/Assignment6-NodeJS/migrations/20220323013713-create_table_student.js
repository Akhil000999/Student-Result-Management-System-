'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("student", {
      rollNo: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true
      },
      name: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
              isAlpha: true
          }
      },
      dob: {
          type: Sequelize.DATEONLY,
          allowNull: false
      },
      score: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('student');
  }
};
