import db from "../models/index";
require('dotenv').config();
import _ from "lodash";

const MAX_NUMBER_SCHEDULES = process.env.MAX_NUMBER_SCHEDULES;

let getTopDoctorHome = (limit) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = await db.User.findAll({
        limit: limit,
        where: { roleId: 'R2' },
        order: [['createdAt', 'DESC']],
        attributes: {
          exclude: ['password']
        },
        include: [
          { model: db.allcode, as: 'positionData', attributes: ['valueEn', 'valueVi'] },
          { model: db.allcode, as: 'genderData', attributes: ['valueEn', 'valueVi'] },
        ],
        raw: true,
        nest: true
      });
      resolve({
        errCode: 0,
        data: users
      })
    } catch (e) {
      reject(e);
    }
  });
}

let getAllDoctors = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let doctors = await db.User.findAll({
        where: { roleId: 'R2' },
        attributes: {
          exclude: ['password', 'image']
        },
      })
      resolve({
        errCode: 0,
        data: doctors
      })
    } catch (e) {
      reject(e);
    }
  })
};

let createInforDoctor = (inputData) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!inputData.doctorId || !inputData.contentHTML || !inputData.contentMarkdown || !inputData.action) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter"
        })
      } else {
        if (inputData.action === 'CREATE') {
          await db.markdown.create({
            contentHTML: inputData.contentHTML,
            contentMarkdown: inputData.contentMarkdown,
            description: inputData.description,
            doctorId: inputData.doctorId
          })
          resolve({
            errCode: 0,
            errMessage: "Save infor doctor succeed! "
          })
        } else if (inputData.action === 'EDIT') {
          console.log("update du lieu markdown : ", inputData.contentMarkdown)
          let doctorMarkdown = await db.markdown.findOne({
            where: { doctorId: inputData.doctorId },
            raw: false,
          })
          if (doctorMarkdown) {
            doctorMarkdown.contentHTML = inputData.contentHTML;
            doctorMarkdown.contentMarkdown = inputData.contentMarkdown;
            doctorMarkdown.description = inputData.description;
            await doctorMarkdown.save();
          }
          resolve({
            errCode: 0,
            errMessage: "update infor doctor succeed! "
          })
        }
      }

    } catch (e) {
      reject(e);
    }
  })
};

let getDetailDoctorById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parmeter!"
        })
      } else {
        let data = await db.User.findOne({
          where: { id: id },
          attributes: {
            exclude: ['password']
          },
          include: [
            { model: db.markdown, attributes: ['contentHTML', 'contentMarkdown', 'description'] },
            { model: db.allcode, as: 'positionData', attributes: ['valueEn', 'valueVi'] },
          ],
          raw: false,
          nest: true
        })
        if (data && data.image) {
          data.image = new Buffer(data.image, 'base64').toString('binary')
        }
        if (!data) data = {};
        resolve({
          errCode: 0,
          data: data
        })
      }
    } catch (e) {
      reject(e);
    }
  })
};

let bulkCreateSchedule = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.arrSchedule || !data.doctorId || !data.formatedDate) {
        resolve({
          errCode: 1,
          errMessage: 'Missing required parameters !'
        })
      } else {
        let schedule = data.arrSchedule;
        if (schedule && schedule.length > 0) {
          schedule = schedule.map(item => {
            item.maxNumber = MAX_NUMBER_SCHEDULES;
            return item
          })
        }
        // get all existing database schedules
        let existing = await db.schedule.findAll(
          {
            where: { doctorId: data.doctorId, date: data.formatedDate },
            attributes: ["timeType", "date", "doctorId", "maxNumber"],
            raw: true
          },
        );
        // convert date
        if (existing && existing.length > 0) {
          existing = existing.map(item => {
            item.date = new Date(item.date).getTime();
            return item;
          })
        }
        //compare different schedules
        let toCreate = _.differenceWith(schedule, existing, (a, b) => {
          return a.timeType === b.timeType && a.date === b.date;
        });

        // create data
        if (toCreate && toCreate.length > 0) {
          await db.schedule.bulkCreate(toCreate)
        }
        resolve({
          errCode: 0,
          errMessage: "OK"
        })
      }

    } catch (error) {
      reject(error);
    }
  })
};

let getSheduleByDate = (doctorId, date) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!doctorId || !date) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameters"
        })
      } else {
        let dataSchedule = await db.schedule.findAll({
          where: {
            doctorId: doctorId,
            date: date
          }
        })
        if (!dataSchedule) dataSchedule = [];
        resolve({
          errCode: 0,
          errMessage: dataSchedule
        })
      }
    } catch (error) {
      reject(error);
    }
  })
}

module.exports = {
  getTopDoctorHome: getTopDoctorHome,
  getAllDoctors: getAllDoctors,
  createInforDoctor: createInforDoctor,
  getDetailDoctorById: getDetailDoctorById,
  bulkCreateSchedule: bulkCreateSchedule,
  getSheduleByDate: getSheduleByDate
}