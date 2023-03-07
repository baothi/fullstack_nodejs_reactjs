import db from "../models/index";
import CRUDService from "../services/CRUDService";


let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log(data);
    return res.render('homepage.ejs', {
      data: JSON.stringify(data)
    });
  } catch (e) {
    console.log(e)
  }
}

let getCRUD = async (req, res) => {
  return res.render('crud.ejs');
};

let postCRUD = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log(message);
  return res.send("post crud from server");
};

let displayGetCRUD = async (req, res) => {
  let data = await CRUDService.getAllUsers();
  console.log('-----------------------------------------------------------------------------------------------');
  console.log(data);
  console.log('---------------------------------------------------------------------------------------------------');
  return res.render('displayCRUD.ejs', {
    dataTable: data
  });
};

let getEditCRUD = async (req, res) => {
  let userId = req.query.id
  if (userId) {
    let userData = await CRUDService.getUserInfoById(userId);
    console.log('-----------------------------getEditCRUD------------------------------------------------------------------');
    console.log(userData);
    console.log('-----------------------------getEditCRUD------------------------------------------------------------------');
    return res.render('editCRUD.ejs', {
      user: userData
    })
  } else {
    return res.send('do not identify')
  }
  return res.send('edit CRUD : ');
};

let putCRUD = async (req, res) => {
  let data = req.body
  let newUsers = await CRUDService.updateUserData(data);
  return res.render('displayCRUD.ejs', {
    dataTable: newUsers
  });
}

module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayGetCRUD: displayGetCRUD,
  getEditCRUD: getEditCRUD,
  putCRUD: putCRUD,
}