'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Daltons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reason: {
        type: Sequelize.STRING
      },
      p_earned_id: {
        type: Sequelize.INTEGER
      },
      p_took_id: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      date_earned: {
        allowNull: true,
        type: Sequelize.DATE
      },
      date_took: {
        allowNull: true,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Daltons');
  }
};