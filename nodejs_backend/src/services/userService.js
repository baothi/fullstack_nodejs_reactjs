import bcrypt from 'bcryptjs';
import db from "../models/index";

var salt = bcrypt.genSaltSync(10);



let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUserEmail(email);
      if (isExist) {
        // user already exists
        let user = await db.User.findOne({
          attributes: ['email', 'roleId', 'password', 'firstName', 'lastName'],
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

let createNewUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      // check email is exist ????
      let check = await checkUserEmail(data.email);
      if (check === true) {
        resolve({
          errCode: 1,
          errmessage: 'Your email is already in used, plz try another email!'
        });
      } else {
        let hashPasswordFromBcrypt = await hashUserPassword(data.password);
        await db.User.create({
          email: data.email,
          password: hashPasswordFromBcrypt,
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
          gender: data.gender,
          roleId: data.roleId,
          phonenumber: data.phonenumber,
          positionId: data.positionId,
        })
        resolve({
          errCode: 0,
          message: 'OK'
        });
      }
    } catch (e) {
      reject(e);
    }
  })
};

let deleteUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      // check email is exist ????
      let user = await db.User.findOne({
        where: { id: userId }
      });
      if (!user) {
        resolve({
          errCode: 2,
          message: 'Your email is already in used, plz try another email!'
        });
      }
      await db.User.destroy({
        where: { id: userId }
      })

      resolve({
        errCode: 0,
        message: 'The user is delete'
      });
    } catch (e) {
      reject(e);
    }
  })
};

let updateUserData = async (data) => {
  console.log('Updating user : ', data);
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id || !data.roleId || !data.positionId || !data.gender) {
        resolve({
          errCode: 2,
          errMessage: 'Missing required parameter'
        });
      }
      let user = await db.User.findOne({
        where: { id: data.id }
      })
      if (user) {
        await db.User.update({
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
          phonenumber: data.phonenumber,
          gender: data.gender,
          roleId: data.roleId,
          positionId: data.positionId
        }, {
          where: { id: data.id },
        })

        resolve({
          errCode: 0,
          message: "Update the user successfully"
        });
      } else {
        resolve({
          errCode: 1,
          message: `User's no found!`
        })
      }
    } catch (e) {
      reject(e);
    }
  });
}

let getAllCodeServices = async (typeInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!typeInput) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter"
        });
      } else {
        let res = {};
        let allcode = await db.allcode.findAll({
          where: { type: typeInput }
        });
        res.errCode = 0;
        res.data = allcode;
        resolve(res);
      }

    } catch (e) {
      reject(e);
    }

  })
};


module.exports = {
  handleUserLogin: handleUserLogin,
  getAllUsers: getAllUsers,
  createNewUser: createNewUser,
  deleteUser: deleteUser,
  updateUserData: updateUserData,
  getAllCodeServices: getAllCodeServices
}