import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDb from "./config/connectDb";
import cors from 'cors';

require("dotenv").config();


let app = express();
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app)
initWebRoutes(app)

connectDb();

let port = process.env.PORT || 8081

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

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

// https://www.youtube.com/watch?v=_YEKpvabzCQ&list=PLncHg6Kn2JT6E38Z3kit9Hnif1xC_9VqI&index=40

// npm install --save bcrypt@5.1.0 bcryptjs@2.4.3
