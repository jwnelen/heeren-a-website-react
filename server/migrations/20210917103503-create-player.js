'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      is_heeren_a: {
        type: Sequelize.BOOLEAN
      },
      nickname: {
        type: Sequelize.STRING
      },
      singles_rating: {
        type: Sequelize.DOUBLE
      },
      singles_rating_end: {
        type: Sequelize.INTEGER
      },
      doubles_rating: {
        type: Sequelize.DOUBLE
      },
      doubles_rating_end: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Players');
  }
};