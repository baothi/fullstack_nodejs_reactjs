"use strict";

var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _viewEngine = _interopRequireDefault(require("./config/viewEngine"));
var _web = _interopRequireDefault(require("./route/web"));
var _connectDb = _interopRequireDefault(require("./config/connectDb"));
var _cors = _interopRequireDefault(require("cors"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
require("dotenv").config();
var app = (0, _express["default"])();
// Add headers before the routes are defined
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', process.env.URL_REACT);

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
// config app

app.use(_bodyParser["default"].json({
  limit: '50mb'
}));
app.use(_bodyParser["default"].urlencoded({
  extended: true,
  limit: '50mb'
}));
(0, _viewEngine["default"])(app);
(0, _web["default"])(app);
(0, _connectDb["default"])();
var port = process.env.PORT || 8081;
app.listen(port, function () {
  console.log("Server is running on port ".concat(port));
});

// npm install body-parser@1.20.2 dotenv@16.0.3 ejs@3.1.8 express@4.18.2

// npm install --save-dev @babel/core@7.21.0 @babel/node@7.20.7 @babel/preset-env@7.20.2 nodemon@2.0.21

// https://sequelize.org/docs/v6/other-topics/migrations/
// npm install --save-dev sequelize-cli@6.6.0
// .sequelizerc
// https://mherman.org/blog/node-postgres-sequelize/
// const path = require('path');

// module.exports = {
//   'config': path.resolve('./', 'config.json'),
//   'migrations-path': path.resolve('./src', 'migrations'),
//   'models-path': path.resolve('./src', 'models'),
//   'seeders-path': path.resolve('./src', 'seeders')
// }
// npx sequelize-cli init
// npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
// https://sequelize.org/docs/v6/other-topics/migrations/
// npm install--save mysql2@3.2.0
// npx sequelize-cli model:generate --name Allcode --attributes key:string,type:string,value_en:string,value_vi:string
// npx sequelize-cli model:generate --name schedule --attributes curentNumber:integer,maxNumber:integer,date:DATE,timeType:string,doctorId:integer

// npx sequelize-cli model:generate --name booking --attributes statusId:string,doctorId:integer,patientId:integer,date:DATE,timeType:string

// npx sequelize-cli model:generate --name specialty --attributes description:text,image:string

// npx sequelize-cli model:generate --name history --attributes patientid:integer,doctorId:string,description:text

// npx sequelize-cli model:generate --name doctor_clinic_specialty --attributes doctorId:integer,clinicId:integer,specialtyId:integer

// npx sequelize-cli model:generate --name clinic --attributes address:integer,description:text,image:string
// npx sequelize-cli model:generate --name doctor_info --attributes doctorId:integer,priceId:string,provinceId:string,paymentId:string,addressClinic:string,nameClinic:string,node:string,count:integer

// https://www.youtube.com/watch?v=_YEKpvabzCQ&list=PLncHg6Kn2JT6E38Z3kit9Hnif1xC_9VqI&index=40

// npm install --save bcrypt@5.1.0 bcryptjs@2.4.3
// update migrate --
// npx sequelize-cli db:migrate --to 20230306124404-create-user.js

// https://www.codementor.io/@anayooleru274/modifying-an-existing-sequelize-migration-1yp92kp7yb
// https://dev.to/nedsoft/add-new-fields-to-existing-sequelize-migration-3527
// https://dev.to/adefam/create-update-add-and-delete-sequelize-migration-eoa