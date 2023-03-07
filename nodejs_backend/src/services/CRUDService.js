import bcrypt from 'bcryptjs';
import db from "../models/index";


var salt = bcrypt.genSaltSync(10);


let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordFromBcrypt = await hashUserPassword(data.password);
      await db.User.create({
        email: data.email,
        password: hashPasswordFromBcrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        gender: data.gender === '1' ? true : false,
        roleId: data.roleId,
        phonenumber: data.phonenumber,
      })
      resolve('ok! created successfully');
    } catch (e) {
      reject(e);
    }
  });

};

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      var hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  })
};

let getAllUsers = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      let Users = await db.User.findAll({
        raw: true,
      });
      resolve(Users);
    } catch (e) {
      reject(e);
    }
  })
};

let getUserInfoById = async (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: userId },
        raw: true
      });
      // let user = await db.User.findByPk(userId, {
      //   raw: true
      // });
      if (user) {
        resolve(user);
      } else {
        resolve({})
      }
    } catch (e) {
      reject(e);
    }
  });
};


let updateUserData = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.User.update({
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phonenumber: data.phonenumber,
      }, {
        where: { id: data.id },
      })
      let allUsers = await db.User.findAll();
      resolve(allUsers);
    } catch (e) {
      reject(e);
    }
  });
}

module.exports = {
  createNewUser: createNewUser,
  getAllUsers: getAllUsers,
  getUserInfoById: getUserInfoById,
  updateUserData: updateUserData,
}