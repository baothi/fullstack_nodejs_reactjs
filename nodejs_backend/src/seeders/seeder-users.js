'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      email: 'baothi@gmail.com',
      password: '$2a$10$Q7LNyTfSDGCBFl3DgjiVpes80a5hRdRGVCBf8zCc2GLIliM8mXT4u', // 123456789
      firstName: 'bao',
      lastName: 'thi',
      address: 'bienhoa dong nai',
      phonenumber: '0906583131',
      gender: 'M',
      roleId: 'R1',
      positionId: 'P1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
