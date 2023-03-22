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
    return queryInterface.bulkInsert('allcodes', [
      {
        type: 'ROLE',
        keyMap: 'R1',
        valueEn: 'Admin',
        valueVi: 'Quản trị viên',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'ROLE',
        keyMap: 'R2',
        valueEn: 'Doctor',
        valueVi: 'Bác sĩ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'ROLE',
        keyMap: 'R3',
        valueEn: 'Patient',
        valueVi: 'Bệnh nhân',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'STATUS',
        keyMap: 'S1',
        valueEn: 'New',
        valueVi: 'Lịch hẹn mới',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'STATUS',
        keyMap: 'S2',
        valueEn: 'Confirmed',
        valueVi: 'Đã xác nhận',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'STATUS',
        keyMap: 'S3',
        valueEn: 'Done',
        valueVi: 'Đã khám xong',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'STATUS',
        keyMap: 'S4',
        valueEn: 'Cancel',
        valueVi: 'Đã hủy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'TIME',
        keyMap: 'T1',
        valueEn: '8:00 AM - 9:00 AM',
        valueVi: '8:00 - 9:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'TIME',
        keyMap: 'T2',
        valueEn: '9:00 AM - 10:00 AM',
        valueVi: '9:00 - 10:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'TIME',
        keyMap: 'T3',
        valueEn: '10:00 AM - 11:00 AM',
        valueVi: '10:00 - 11:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'TIME',
        keyMap: 'T4',
        valueEn: '11:00 AM - 0:00 PM',
        valueVi: '11:00 - 12:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'TIME',
        keyMap: 'T5',
        valueEn: '1:00 PM - 2:00 PM',
        valueVi: '13:00 - 14:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'TIME',
        keyMap: 'T6',
        valueEn: '2:00 PM - 3:00 PM',
        valueVi: '14:00 - 15:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'TIME',
        keyMap: 'T7',
        valueEn: '3:00 PM - 4:00 PM',
        valueVi: '15:00 - 16:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'TIME',
        keyMap: 'T8',
        valueEn: '4:00 PM - 5:00 PM',
        valueVi: '16:00 - 17:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'POSITION',
        keyMap: 'P0',
        valueEn: 'None',
        valueVi: 'Bác sĩ',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        type: 'POSITION',
        keyMap: 'P1',
        valueEn: 'Master',
        valueVi: 'Thạc sĩ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'POSITION',
        keyMap: 'P2',
        valueEn: 'Doctor',
        valueVi: 'Tiến sĩ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'POSITION',
        keyMap: 'P3',
        valueEn: 'Associate Professor',
        valueVi: 'Phó giáo sư',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'POSITION',
        keyMap: 'P4',
        valueEn: 'Professor',
        valueVi: 'Giáo sư',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'GENDER',
        keyMap: 'M',
        valueEn: 'Male',
        valueVi: 'Nam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'GENDER',
        keyMap: 'F',
        valueEn: 'Female',
        valueVi: 'Nữ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'GENDER',
        keyMap: 'O',
        valueEn: 'Other',
        valueVi: 'Khác',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('allcodes', null, {});
  }
};