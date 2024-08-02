'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.removeColumn('products','Category')

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('products','Category',{
      type:Sequelize.STRING,
      allowNull:true,
    });

  },
};
