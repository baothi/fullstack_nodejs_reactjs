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
    return queryInterface.bulkInsert('Users', [
      {
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
      },
      {
        email: 'doctor1@gmail.com',
        password: '$2a$10$Bue0yUq59BRzBbJQIbr7rOVpgxVVnfnAQSFLNzldZV4NX3pcYci7S', // 123456789
        firstName: 'Greene, Christopher',
        lastName: 'J., MD, MPH',
        address: 'University of Alabama at Birmingham - Emergency Medicine',
        phonenumber: '0906583131',
        gender: 'M',
        roleId: 'R2',
        positionId: 'P1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'doctor2@gmail.com',
        password: '$2a$10$Bue0yUq59BRzBbJQIbr7rOVpgxVVnfnAQSFLNzldZV4NX3pcYci7S', // 123456789
        firstName: 'Ocampo, Lucille',
        lastName: 'Gisela A., MD',
        address: 'bienhoa dong nai',
        phonenumber: '0906583131',
        gender: 'M',
        roleId: 'R2',
        positionId: 'P2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'doctor3@gmail.com',
        password: '$2a$10$Bue0yUq59BRzBbJQIbr7rOVpgxVVnfnAQSFLNzldZV4NX3pcYci7S', // 123456789
        firstName: 'Phương An',
        lastName: 'Trần Nguyễn',
        address: 'Hà nội',
        phonenumber: '0906583131',
        gender: 'M',
        roleId: 'R2',
        positionId: 'P2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'doctor4@gmail.com',
        password: '$2a$10$Bue0yUq59BRzBbJQIbr7rOVpgxVVnfnAQSFLNzldZV4NX3pcYci7S', // 123456789
        firstName: 'Viết Ngọc',
        lastName: 'Phạm Thị',
        address: 'Hà nội',
        phonenumber: '0906583131',
        gender: 'M',
        roleId: 'R2',
        positionId: 'P2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'doctor5@gmail.com',
        password: '$2a$10$Bue0yUq59BRzBbJQIbr7rOVpgxVVnfnAQSFLNzldZV4NX3pcYci7S', // 123456789
        firstName: 'RAHUL AGARWAL',
        lastName: 'AGARWAL',
        address: 'Hà nội',
        phonenumber: '0906583131',
        gender: 'M',
        roleId: 'R2',
        positionId: 'P2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'doctor6@gmail.com',
        password: '$2a$10$Bue0yUq59BRzBbJQIbr7rOVpgxVVnfnAQSFLNzldZV4NX3pcYci7S', // 123456789
        firstName: 'Eash',
        lastName: 'Min',
        address: 'Hà nội',
        phonenumber: '0906583131',
        gender: 'M',
        roleId: 'R2',
        positionId: 'P2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'doctor7@gmail.com',
        password: '$2a$10$Bue0yUq59BRzBbJQIbr7rOVpgxVVnfnAQSFLNzldZV4NX3pcYci7S', // 123456789
        firstName: 'Andrews',
        lastName: 'Alen',
        address: 'Hà nội',
        phonenumber: '0906583131',
        gender: 'M',
        roleId: 'R2',
        positionId: 'P2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'doctor8@gmail.com',
        password: '$2a$10$Bue0yUq59BRzBbJQIbr7rOVpgxVVnfnAQSFLNzldZV4NX3pcYci7S', // 123456789
        firstName: 'dr-sanjay-',
        lastName: 'jain',
        address: 'Hà nội',
        phonenumber: '0906583131',
        gender: 'M',
        roleId: 'R2',
        positionId: 'P2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'doctor9@gmail.com',
        password: '$2a$10$Bue0yUq59BRzBbJQIbr7rOVpgxVVnfnAQSFLNzldZV4NX3pcYci7S', // 123456789
        firstName: 'Dr. Alice',
        lastName: 'Hur',
        address: 'Hà nội',
        phonenumber: '0906583131',
        gender: 'M',
        roleId: 'R2',
        positionId: 'P2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'doctor1@gmail.com',
        password: '$2a$10$Bue0yUq59BRzBbJQIbr7rOVpgxVVnfnAQSFLNzldZV4NX3pcYci7S', // 123456789
        firstName: 'Dr Lucy ',
        lastName: 'Xy',
        address: 'Hà nội',
        phonenumber: '0906583131',
        gender: 'M',
        roleId: 'R2',
        positionId: 'P2',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
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
