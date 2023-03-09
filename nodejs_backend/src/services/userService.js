import bcrypt from 'bcryptjs';
import db from "../models/index";



let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUserEmail(email);
      if (isExist) {
        // user already exists
        let user = await db.User.findOne({
          attributes: ['email', 'roleId', 'password'],
          where: { email: email },
          raw: true,
          // attributes: {
          //   include: ['email', 'roleId'], // define columns that you want to show
          //   //exclude: [] // define columns that you don't want 
          // }
        });
        if (user) {
          // compare the password
          let check = await bcrypt.compareSync(password, user.password); // compare the password
          if (check) {
            userData.errCode = 0;
            userData.errMessage = 'OK';
            delete user.password;
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMessage = 'Wrong password';
          }
        } else {
          // return error
          userData.errCode = 2;
          userData.errMessage = `Your's email isn't exist in your system. Please try other email`
        }
        resolve(userData);
      } else {
        // return error
        userData.errCode = 1;
        userData.errMessage = `Your's email isn't exist in your system. Please try other email`
        resolve(userData);
      }
    } catch (e) {
      reject(e);
    }
  });
};

let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail }
      })
      if (user) {
        resolve(true)
      } else {
        resolve(false)
      }
    } catch (e) {
      reject(e);
    }
  })
};

let getAllUsers = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = '';
      if (userId === 'ALL') {
        users = db.User.findAll({
          attributes: {
            exclude: ['password']
          },
        })
      }
      if (userId && userId !== 'ALL') {
        users = await db.User.findOne({
          attributes: {
            exclude: ['password']
          },
          where: { id: userId }
        })
      }
      resolve(users)
    } catch (e) {
      reject(e);
    }
  })
};


module.exports = {
  handleUserLogin: handleUserLogin,
  getAllUsers: getAllUsers,
}